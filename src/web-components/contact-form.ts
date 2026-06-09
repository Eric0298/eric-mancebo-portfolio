type ContactFieldName = "name" | "email" | "phone" | "reason" | "message" | "consent";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  reason: string;
  reasonLabel: string;
  message: string;
  page: string;
  submittedAt: string;
}

const fieldLimits = {
  name: 80,
  email: 120,
  phone: 30,
  message: 2000,
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[+()\d\s.-]{6,30}$/;

class PortfolioContactForm extends HTMLElement {
  private form: HTMLFormElement | null = null;

  connectedCallback() {
    this.form = this.querySelector("form");
    this.form?.addEventListener("submit", this.handleSubmit);
    this.form?.addEventListener("input", this.handleInput);
    this.form?.addEventListener("change", this.handleInput);
  }

  disconnectedCallback() {
    this.form?.removeEventListener("submit", this.handleSubmit);
    this.form?.removeEventListener("input", this.handleInput);
    this.form?.removeEventListener("change", this.handleInput);
  }

  private handleInput = (event: Event) => {
    const target = event.target;

    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement
    ) {
      this.clearFieldError(target.name as ContactFieldName);
      this.setStatus("", "neutral");
    }
  };

  private handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    if (!this.form) {
      return;
    }

    const honeypotField = this.dataset.honeypotField || "companyWebsite";
    const honeypot = this.getTextValue(honeypotField);

    if (honeypot) {
      this.setStatus(this.dataset.messageSuccess || "", "success");
      this.form.reset();
      return;
    }

    const validation = this.validate();

    if (!validation.isValid || !validation.payload) {
      this.setStatus(this.dataset.messageInvalid || "", "error");
      validation.firstInvalidField?.focus();
      return;
    }

    try {
      if (this.dataset.contactMode === "endpoint") {
        await this.submitToEndpoint(validation.payload);
        this.setStatus(this.dataset.messageSuccess || "", "success");
      } else {
        this.openMailClient(validation.payload);
        this.setStatus(this.dataset.messageMailto || this.dataset.messageSuccess || "", "success");
      }

      this.form.reset();
    } catch {
      this.setStatus(this.dataset.messageFailure || "", "error");
    }
  };

  private validate() {
    const nameField = this.getField<HTMLInputElement>("name");
    const emailField = this.getField<HTMLInputElement>("email");
    const phoneField = this.getField<HTMLInputElement>("phone");
    const reasonField = this.getField<HTMLSelectElement>("reason");
    const messageField = this.getField<HTMLTextAreaElement>("message");
    const consentField = this.getField<HTMLInputElement>("consent");
    const invalidFields: HTMLElement[] = [];

    const name = this.normalizeSingleLine(nameField?.value || "", fieldLimits.name);
    const email = this.normalizeEmail(emailField?.value || "");
    const phone = this.normalizeSingleLine(phoneField?.value || "", fieldLimits.phone);
    const reason = this.normalizeSingleLine(reasonField?.value || "", 80);
    const reasonLabel = this.normalizeSingleLine(reasonField?.selectedOptions[0]?.textContent || "", 120);
    const message = this.normalizeMessage(messageField?.value || "");

    this.setFieldValue(nameField, name);
    this.setFieldValue(emailField, email);
    this.setFieldValue(phoneField, phone);
    this.setFieldValue(messageField, message);

    if (!name) {
      invalidFields.push(this.markInvalid(nameField, "name", this.dataset.errorNameRequired || ""));
    }

    if (!email) {
      invalidFields.push(this.markInvalid(emailField, "email", this.dataset.errorEmailRequired || ""));
    } else if (!emailPattern.test(email)) {
      invalidFields.push(this.markInvalid(emailField, "email", this.dataset.errorEmailInvalid || ""));
    }

    if (phone && !phonePattern.test(phone)) {
      invalidFields.push(this.markInvalid(phoneField, "phone", this.dataset.errorPhoneInvalid || ""));
    }

    if (!reason) {
      invalidFields.push(this.markInvalid(reasonField, "reason", this.dataset.errorReasonRequired || ""));
    }

    if (!message) {
      invalidFields.push(this.markInvalid(messageField, "message", this.dataset.errorMessageRequired || ""));
    }

    if (!consentField?.checked) {
      invalidFields.push(this.markInvalid(consentField, "consent", this.dataset.errorConsentRequired || ""));
    }

    if (invalidFields.length > 0) {
      return {
        isValid: false,
        firstInvalidField: invalidFields.find(Boolean),
      };
    }

    return {
      isValid: true,
      payload: {
        name,
        email,
        phone,
        reason,
        reasonLabel,
        message,
        page: window.location.pathname,
        submittedAt: new Date().toISOString(),
      } satisfies ContactPayload,
    };
  }

  private async submitToEndpoint(payload: ContactPayload) {
    const endpoint = this.dataset.contactEndpoint;

    if (!endpoint) {
      throw new Error("Missing contact endpoint");
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Contact request failed");
    }
  }

  private openMailClient(payload: ContactPayload) {
    const recipient = this.normalizeEmail(this.dataset.contactRecipient || "");

    if (!emailPattern.test(recipient)) {
      throw new Error("Missing contact recipient");
    }

    const subjectPrefix = this.normalizeSingleLine(this.dataset.mailSubjectPrefix || "Contact", 80);
    const subject = `${subjectPrefix}: ${payload.reasonLabel || payload.reason}`;
    const notProvided = this.dataset.labelNotProvided || "-";
    const body = [
      `${this.dataset.labelName || "Name"}: ${payload.name}`,
      `${this.dataset.labelEmail || "Email"}: ${payload.email}`,
      `${this.dataset.labelPhone || "Phone"}: ${payload.phone || notProvided}`,
      `${this.dataset.labelReason || "Reason"}: ${payload.reasonLabel || payload.reason}`,
      "",
      `${this.dataset.labelMessage || "Message"}:`,
      payload.message,
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  private getField<T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(name: string): T | null {
    const field = this.form?.elements.namedItem(name);

    return field instanceof HTMLElement ? (field as T) : null;
  }

  private getTextValue(name: string) {
    const field = this.getField<HTMLInputElement | HTMLTextAreaElement>(name);

    return this.normalizeSingleLine(field?.value || "", 256);
  }

  private setFieldValue(field: HTMLInputElement | HTMLTextAreaElement | null, value: string) {
    if (field) {
      field.value = value;
    }
  }

  private markInvalid(
    field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null,
    name: ContactFieldName,
    message: string,
  ) {
    field?.setAttribute("aria-invalid", "true");
    this.setFieldError(name, message);

    return field || document.body;
  }

  private clearFieldError(name: ContactFieldName) {
    const field = this.getField<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(name);
    const error = this.querySelector<HTMLElement>(`[data-contact-error-for="${name}"]`);

    field?.removeAttribute("aria-invalid");

    if (error) {
      error.textContent = "";
    }
  }

  private setFieldError(name: ContactFieldName, message: string) {
    const error = this.querySelector<HTMLElement>(`[data-contact-error-for="${name}"]`);

    if (error) {
      error.textContent = message;
    }
  }

  private setStatus(message: string, state: "neutral" | "success" | "error") {
    const status = this.querySelector<HTMLElement>("[data-contact-status]");

    if (!status) {
      return;
    }

    status.textContent = message;
    status.dataset.status = state;
  }

  private normalizeEmail(value: string) {
    return value.trim().toLowerCase().slice(0, fieldLimits.email);
  }

  private normalizeSingleLine(value: string, limit: number) {
    return value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, limit);
  }

  private normalizeMessage(value: string) {
    return value
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, " ")
      .replace(/[^\S\n]+/g, " ")
      .trim()
      .slice(0, fieldLimits.message);
  }
}

if (!customElements.get("portfolio-contact-form")) {
  customElements.define("portfolio-contact-form", PortfolioContactForm);
}

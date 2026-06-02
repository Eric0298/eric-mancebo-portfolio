class PortfolioContactIntent extends HTMLElement {
  private abortController = new AbortController();

  connectedCallback() {
    document.addEventListener("click", this.handleClick, {
      signal: this.abortController.signal,
    });
  }

  disconnectedCallback() {
    this.abortController.abort();
  }

  private handleClick = (event: MouseEvent) => {
    const target = event.target instanceof HTMLElement
      ? event.target.closest<HTMLElement>("[data-contact-channel]")
      : null;

    if (!target) {
      return;
    }

    const detail = {
      channel: target.dataset.contactChannel,
      intent: target.dataset.contactIntent,
      href: target.getAttribute("href"),
      source: target.closest("[data-section]")?.getAttribute("data-section") ?? "global",
      timestamp: new Date().toISOString(),
    };

    this.dispatchEvent(
      new CustomEvent("portfolio:contact-intent", {
        bubbles: true,
        detail,
      }),
    );
  };
}

if (!customElements.get("portfolio-contact-intent")) {
  customElements.define("portfolio-contact-intent", PortfolioContactIntent);
}

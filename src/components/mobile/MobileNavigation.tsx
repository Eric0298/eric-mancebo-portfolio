import { useEffect, useId, useRef, useState } from "react";
import type { ContactChannel, NavigationItem } from "../../data/schemas";
import type { Language, TranslationDictionary } from "../../i18n/config";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import MobileContactSheet from "./MobileContactSheet";

interface MobileNavigationProps {
  navItems: NavigationItem[];
  contactItems: ContactChannel[];
  labels: TranslationDictionary["navigation"];
  languageLabels: TranslationDictionary["languageSwitcher"];
  contactLabel: string;
  currentLanguage: Language;
  currentPath: string;
}

export default function MobileNavigation({
  navItems,
  contactItems,
  labels,
  languageLabels,
  contactLabel,
  currentLanguage,
  currentPath,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const mobileItems = navItems
    .filter((item) => item.mobilePriority)
    .sort((left, right) => Number(left.mobilePriority) - Number(right.mobilePriority));
  const contactItem = navItems.find((item) => item.section === "contact");

  useEffect(() => {
    if (!isOpen) {
      document.body.removeAttribute("data-mobile-menu-open");
      return;
    }

    document.body.setAttribute("data-mobile-menu-open", "true");
    panelRef.current?.focus();

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.body.removeAttribute("data-mobile-menu-open");
    };
  }, [isOpen]);

  return (
    <div className="mobile-navigation">
      <button
        className="mobile-navigation__trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true">{isOpen ? labels.menuClose : labels.menuOpen}</span>
        <span className="sr-only">{labels.mobileToggle}</span>
      </button>

      <div
        id={menuId}
        ref={panelRef}
        className="mobile-navigation__panel"
        data-open={isOpen}
        role="dialog"
        aria-modal="true"
        aria-label={labels.mobileLabel}
        tabIndex={-1}
      >
        <div className="mobile-navigation__panel-header">
          <LanguageSwitcher
            currentLanguage={currentLanguage}
            currentPath={currentPath}
            labels={languageLabels}
          />
          <button
            className="mobile-navigation__close"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            {labels.menuClose}
          </button>
        </div>

        <nav className="mobile-navigation__links" aria-label={labels.mobileLabel}>
          {mobileItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        {contactItem ? (
          <a
            className="mobile-navigation__contact"
            href={contactItem.href}
            onClick={() => setIsOpen(false)}
          >
            {contactItem.label}
          </a>
        ) : null}

        <MobileContactSheet contactItems={contactItems} label={contactLabel} />
      </div>
    </div>
  );
}

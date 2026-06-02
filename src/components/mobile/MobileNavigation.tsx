import { useId, useState } from "react";
import type { ContactChannel, NavigationItem } from "../../data/schemas";
import MobileContactSheet from "./MobileContactSheet";

interface MobileNavigationProps {
  navItems: NavigationItem[];
  contactItems: ContactChannel[];
}

export default function MobileNavigation({ navItems, contactItems }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const mobileItems = navItems
    .filter((item) => item.mobilePriority)
    .sort((left, right) => Number(left.mobilePriority) - Number(right.mobilePriority));

  return (
    <div className="mobile-navigation">
      <button
        className="mobile-navigation__trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true">{isOpen ? "Close" : "Menu"}</span>
        <span className="sr-only">Toggle mobile navigation</span>
      </button>

      <div id={menuId} className="mobile-navigation__panel" data-open={isOpen}>
        <nav aria-label="Mobile navigation">
          {mobileItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <MobileContactSheet contactItems={contactItems} />
      </div>
    </div>
  );
}

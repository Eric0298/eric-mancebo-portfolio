import type { ContactChannel } from "../../data/schemas";

interface MobileContactSheetProps {
  contactItems: ContactChannel[];
}

export default function MobileContactSheet({ contactItems }: MobileContactSheetProps) {
  return (
    <div className="mobile-contact-sheet" aria-label="Mobile contact channels">
      {contactItems.map((channel) => {
        const isDisabled = channel.isPlaceholder || channel.href === "#contact";

        if (isDisabled) {
          return (
            <span
              key={channel.channel}
              className="mobile-contact-sheet__item mobile-contact-sheet__item--placeholder"
              aria-disabled="true"
            >
              <span>{channel.label}</span>
              <small>{channel.handle}</small>
            </span>
          );
        }

        return (
          <a
            key={channel.channel}
            className="mobile-contact-sheet__item"
            href={channel.href}
            data-contact-channel={channel.channel}
            data-contact-intent={channel.automationIntent}
          >
            <span>{channel.label}</span>
            <small>{channel.handle}</small>
          </a>
        );
      })}
    </div>
  );
}

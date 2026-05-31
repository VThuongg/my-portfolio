export function LinkBtn({ href, label, icon }) {
  const isPlaceholder = href === "#";
  return (
    <a
      href={href}
      target={isPlaceholder ? undefined : "_blank"}
      rel="noreferrer"
      className={`link-btn ${isPlaceholder ? "disabled" : ""}`}
      onClick={(e) => {
        if (isPlaceholder) {
          e.preventDefault();
        }
      }}
      style={isPlaceholder ? { cursor: 'not-allowed', opacity: 0.6 } : undefined}
      title={isPlaceholder ? "Demo coming soon!" : undefined}
    >
      <span>{icon}</span> {isPlaceholder ? `${label} (Soon)` : label}
    </a>
  );
}

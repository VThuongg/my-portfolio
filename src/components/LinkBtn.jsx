export function LinkBtn({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link-btn"
    >
      <span>{icon}</span> {label}
    </a>
  );
}

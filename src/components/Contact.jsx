export function Contact({ contactRef, contactInView }) {
  return (
    <section id="contact" ref={contactRef} className="contact-section">
      <div className={`contact-container ${contactInView ? "in-view" : ""}`}>
        <span className="contact-label">GET IN TOUCH</span>
        <h2 className="contact-title">Let's work together</h2>

        <p className="contact-desc">
          Open to full-time opportunities, freelance projects, or just a good tech conversation.
        </p>

        <div className="contact-email">
          <span>📧</span>{" "}
          <span className="email-text-link">
            thuong16052004@gmail.com
          </span>
        </div>

        <div className="contact-links">
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/VThuongg" },
            { label: "GitHub", href: "https://github.com/VThuongg" },
            { label: "Portfolio", href: "https://VThuongg.github.io" },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="contact-link-btn"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

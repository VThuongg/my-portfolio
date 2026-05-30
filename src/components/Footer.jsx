export function Footer({ t }) {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} {t("footerText")} · Built with React</p>
    </footer>
  );
}


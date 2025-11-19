function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {year} Transporte Zafe · Portal Interno</p>
      </div>
    </footer>
  );
}

export default Footer;
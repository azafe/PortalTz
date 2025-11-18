import NavBar from "./NavBar.jsx";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-mark">TZ</span>
          <span className="logo-text">Transporte Zafe · Interno</span>
        </div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
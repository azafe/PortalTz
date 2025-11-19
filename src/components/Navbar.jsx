import { NavLink } from "react-router-dom";

function NavBar() {
  const getClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="nav scroll-nav">
      <NavLink end to="/" className={getClass}>
        Inicio
      </NavLink>
      <NavLink to="/valores" className={getClass}>
        Valores
      </NavLink>
      <NavLink to="/proposito" className={getClass}>
        Propósito
      </NavLink>
      <NavLink to="/organigrama" className={getClass}>
        Organigrama
      </NavLink>
      <NavLink to="/manual-chofer" className={getClass}>
        Manual del Chofer
      </NavLink>
      <NavLink to="/flota-equipos">
  Flota y Equipos
</NavLink>
    </nav>
  );
}

export default NavBar;
import { Link } from 'react-router-dom';
import './Nav.css';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? 'nav-links active' : 'nav-links'}>
        <li><Link to={"/"}>Inicio</Link></li>
        <li><Link to={"/"}>Productos</Link></li>
        <li><Link to={"/ofertas"}>Ofertas</Link></li>
        <li><Link to={"/contacto"}>Contacto</Link></li>
      </ul>
    </nav>
  );
}
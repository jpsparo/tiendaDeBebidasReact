import './Header.css';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import logo from "../../logoCommodity.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="Commodity Logo" />
          </Link>
           <Link to={"/"}>
            <span>Commodity</span>
          </Link>
        </div>

        <Nav />

        <div className="header-actions">
          <Link to={"/carrito"} className="btn">
            Carrito
          </Link>
        </div>

      </div>
    </header>
  );
}
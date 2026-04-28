import './Header.css';
import Nav from '../Nav/Nav';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src=".\src\logoCommodity.png" alt="Commodity Logo" />
          <h1>Commodity</h1>
        </div>

        <Nav />

        <div className="header-actions">
          <button className="btn">Carrito</button>
        </div>
      </div>
    </header>
  );
}
import './Footer.css';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Commodity</h2>
          <p>Tu tienda de bebidas premium</p>
        </div>

        <div className="footer-links">
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="https://wa.me/5490000000000" target="_blank">
                <FaWhatsapp /> WhatsApp
              </a>
            </li>
            <li>
              <a href="https://instagram.com/commodity" target="_blank">
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Desarrollado por Juampi Sparo 2026</p>
      </div>
    </footer>
  );
}

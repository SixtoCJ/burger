import type React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faFacebook, 
  faInstagram, 
  faTwitter, 
  faYoutube 
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              Gourmet<span>Burger</span>
            </h2>
            <p>Sabor que trasciende lo ordinario</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Navegación</h3>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/menu">Menú</Link>
                </li>
                <li>
                  <Link to="/promociones">Promociones</Link>
                </li>
                <li>
                  <Link to="/sobre-nosotros">Sobre Nosotros</Link>
                </li>
                <li>
                  <Link to="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Legal</h3>
              <ul>
                <li>
                  <Link to="/terminos">Términos y Condiciones</Link>
                </li>
                <li>
                  <Link to="/privacidad">Política de Privacidad</Link>
                </li>
                <li>
                  <Link to="/cookies">Política de Cookies</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Contacto</h3>
              <address>
                <p>Av. Gourmet 123, Ciudad</p>
                <p>Tel: (123) 456-7890</p>
                <p>Email: info@gourmetburger.com</p>
              </address>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

          <p className="copyright">&copy; {new Date().getFullYear()} GourmetBurger. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faShoppingCart, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import "./Navbar.css"
import { useCart } from "../context/CartContext"

interface NavbarProps {
  toggleSidebar: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { getCartCount } = useCart()

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          
            <h1 className="logo">
              Gourmet<span>Burger</span>
            </h1>
          
        </div>

        <nav className="navbar-center">
          <ul className="nav-links">
            <li>
              <Link to="/burger">Inicio</Link>
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
        </nav>

        <div className="navbar-right">
          <div className="search-box">
            <input type="text" placeholder="Buscar..." />
            <button className="search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <Link to="/carrito" className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
          </Link>

          
        </div>
      </div>
    </header>
  )
}

export default Navbar

"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimes,
  faHome,
  faUtensils,
  faPercent,
  faInfoCircle,
  faEnvelope,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"
import "./Sidebar.css"

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? "active" : ""}`} onClick={toggleSidebar}></div>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">GourmetBurger</h2>
          <button className="close-sidebar" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <ul>
              <li>
                <Link to="/burger" onClick={toggleSidebar}>
                  <FontAwesomeIcon icon={faHome} />
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link to="/menu" onClick={toggleSidebar}>
                  <FontAwesomeIcon icon={faUtensils} />
                  <span>Menú</span>
                </Link>
              </li>
              <li>
                <Link to="/promociones" onClick={toggleSidebar}>
                  <FontAwesomeIcon icon={faPercent} />
                  <span>Promociones</span>
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" onClick={toggleSidebar}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <span>Sobre Nosotros</span>
                </Link>
              </li>
              <li>
                <Link to="/contacto" onClick={toggleSidebar}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>Contacto</span>
                </Link>
              </li>
              <li>
                <Link to="/carrito" onClick={toggleSidebar}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span>Carrito</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="sidebar-footer">
          <p>© 2024 GourmetBurger</p>
          <p>Todos los derechos reservados</p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

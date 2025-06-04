"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

// Componentes
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

// Páginas
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Promociones from "./pages/Promociones"
import SobreNosotros from "./pages/SobreNosotros"
import Contacto from "./pages/Contacto"
import Carrito from "./pages/Carrito"

// Contexto
import { CartProvider } from "./context/CartContext"

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <main className="main-content">
            <Routes>
              <Route path="/burger" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/promociones" element={<Promociones />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App

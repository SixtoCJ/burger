import type React from "react"
import { Link } from "react-router-dom"
import "./Hero.css"

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Sabor Extraordinario en Cada Bocado</h1>
        <p>Descubre nuestras hamburguesas gourmet elaboradas con los mejores ingredientes y técnicas culinarias</p>
        <div className="hero-buttons">
          <Link to="/menu" className="btn btn-primary">
            Ver Menú
          </Link>
          <Link to="/promociones" className="btn btn-outline">
            Promociones
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

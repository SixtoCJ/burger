import type React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward, faLeaf, faUtensils, faHeart } from "@fortawesome/free-solid-svg-icons"
import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"
import "./Home.css"

// Datos de ejemplo
const featuredProducts = [
  {
    id: 1,
    name: "Hamburguesa Clásica",
    description: "Nuestra hamburguesa clásica con carne de res, lechuga, tomate, cebolla y nuestra salsa especial.",
    price: 8.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "hamburguesas",
  },
  {
    id: 2,
    name: "Hamburguesa Gourmet",
    description: "Carne premium, queso cheddar madurado, bacon crujiente, cebolla caramelizada y salsa BBQ casera.",
    price: 12.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "hamburguesas",
  },
  {
    id: 3,
    name: "Hamburguesa Vegetariana",
    description: "Deliciosa hamburguesa de garbanzos y verduras, con aguacate, rúcula y mayonesa de hierbas.",
    price: 10.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "vegetarianas",
  },
  {
    id: 4,
    name: "Combo Familiar",
    description: "4 hamburguesas clásicas, 2 porciones grandes de papas fritas y 4 bebidas.",
    price: 34.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "combos",
  },
]

const testimonials = [
  {
    id: 1,
    name: "María García",
    text: "Las mejores hamburguesas que he probado. Los ingredientes son frescos y el sabor es incomparable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    text: "Excelente servicio y hamburguesas deliciosas. El ambiente del local es muy acogedor.",
    rating: 5,
  },
  {
    id: 3,
    name: "Laura Martínez",
    text: "Me encanta la variedad de opciones, incluso para vegetarianos como yo. ¡Volveré pronto!",
    rating: 4,
  },
]

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />

      {/* Sección de Características */}
      <section className="features-section section">
        <div className="container">
          <h2 className="section-title">¿Por qué elegirnos?</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <h3>Calidad Premium</h3>
              <p>Utilizamos los mejores ingredientes seleccionados cuidadosamente para garantizar el mejor sabor.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h3>Ingredientes Frescos</h3>
              <p>Trabajamos con proveedores locales para asegurar la frescura de todos nuestros ingredientes.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faUtensils} />
              </div>
              <h3>Recetas Originales</h3>
              <p>Nuestras recetas exclusivas son el resultado de años de experiencia y pasión por la gastronomía.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <h3>Hecho con Amor</h3>
              <p>
                Cada hamburguesa es preparada con dedicación y atención al detalle para ofrecerte una experiencia única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Productos Destacados */}
      <section className="featured-products-section section">
        <div className="container">
          <h2 className="section-title">Productos Destacados</h2>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/menu" className="btn btn-primary">
              Ver Todo el Menú
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Promoción */}
      <section className="promo-section">
        <div className="container">
          <div className="promo-content">
            <h2>Oferta Especial</h2>
            <h3>2x1 en Hamburguesas Clásicas</h3>
            <p>Todos los martes y jueves. ¡No te lo pierdas!</p>
            <Link to="/promociones" className="btn btn-secondary">
              Ver Promociones
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "star active" : "star"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Suscripción */}
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-content">
            <h2>Mantente Informado</h2>
            <p>Suscríbete para recibir nuestras promociones y novedades</p>

            <form className="subscribe-form">
              <input type="email" placeholder="Tu correo electrónico" required />
              <button type="submit" className="btn btn-primary">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

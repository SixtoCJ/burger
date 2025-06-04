import type React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag, faClock, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import "./Promociones.css"

interface Promocion {
  id: number
  titulo: string
  descripcion: string
  precio: number
  precioOriginal: number
  imagen: string
  etiqueta: string
  fechaFin: string
  codigo: string
}

const promociones: Promocion[] = [
  {
    id: 1,
    titulo: "Combo Familiar",
    descripcion: "4 hamburguesas clásicas, 2 porciones grandes de papas fritas y 4 refrescos.",
    precio: 39.99,
    precioOriginal: 59.99,
    imagen: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    etiqueta: "Oferta Especial",
    fechaFin: "31/12/2023",
    codigo: "FAMILIA40"
  },
  {
    id: 2,
    titulo: "Dúo Perfecto",
    descripcion: "2 hamburguesas premium, 1 porción grande de papas fritas y 2 refrescos.",
    precio: 24.99,
    precioOriginal: 32.99,
    imagen: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    etiqueta: "Más Vendido",
    fechaFin: "31/12/2023",
    codigo: "DUO25"
  },
  {
    id: 3,
    titulo: "Hamburguesa del Mes",
    descripcion: "Hamburguesa especial con queso de cabra, mermelada de bacon y rúcula.",
    precio: 13.99,
    precioOriginal: 16.99,
    imagen: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    etiqueta: "Edición Limitada",
    fechaFin: "30/11/2023",
    codigo: "MESHAMB"
  },
  {
    id: 4,
    titulo: "Combo Vegetariano",
    descripcion: "2 hamburguesas vegetarianas, 1 ensalada y 2 refrescos naturales.",
    precio: 22.99,
    precioOriginal: 28.99,
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    etiqueta: "Saludable",
    fechaFin: "31/12/2023",
    codigo: "VEGGIE20"
  },
  {
    id: 5,
    titulo: "Desayuno Gourmet",
    descripcion: "Hamburguesa con huevo, bacon, queso y café americano.",
    precio: 11.99,
    precioOriginal: 14.99,
    imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    etiqueta: "Desayuno",
    fechaFin: "31/12/2023",
    codigo: "BREAKFAST"
  },
  {
    id: 6,
    titulo: "Happy Hour",
    descripcion: "Hamburguesa clásica, papas fritas y cerveza artesanal.",
    precio: 15.99,
    precioOriginal: 19.99,
    imagen: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    etiqueta: "Happy Hour",
    fechaFin: "31/12/2023",
    codigo: "HAPPY20"
  }
];

const Promociones: React.FC = () => {
  return (
    <div className="promociones-page">
      <div className="promociones-header">
        <div className="container">
          <h1 className="promociones-title">Promociones Especiales</h1>
          <p className="promociones-subtitle">
            Aprovecha nuestras increíbles ofertas y disfruta de las mejores hamburguesas a precios especiales
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="promociones-grid">
            {promociones.map((promo) => (
              <div className="promocion-card" key={promo.id}>
                <div className="promocion-badge">{promo.etiqueta}</div>
                <div className="promocion-image">
                  <img src={promo.imagen || "/placeholder.svg"} alt={promo.titulo} />
                </div>
                <div className="promocion-content">
                  <h3 className="promocion-title">{promo.titulo}</h3>
                  <p className="promocion-description">{promo.descripcion}</p>
                  
                  <div className="promocion-details">
                    <div className="promocion-price">
                      <span className="price-current">${promo.precio.toFixed(2)}</span>
                      <span className="price-original">${promo.precioOriginal.toFixed(2)}</span>
                    </div>
                    
                    <div className="promocion-meta">
                      <div className="promocion-meta-item">
                        <FontAwesomeIcon icon={faTag} />
                        <span>Código: {promo.codigo}</span>
                      </div>
                      <div className="promocion-meta-item">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>Válido hasta: {promo.fechaFin}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/menu" className="btn btn-primary promocion-btn">
                    Ordenar Ahora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section promociones-info-section">
        <div className="container">
          <div className="promociones-info">
            <div className="promociones-info-content">
              <h2>¿Cómo funcionan nuestras promociones?</h2>
              <p>
                Nuestras promociones están diseñadas para que disfrutes de la mejor experiencia gastronómica a precios especiales. 
                Puedes utilizar los códigos promocionales al realizar tu pedido en línea o mencionarlos al ordenar en nuestro restaurante.
              </p>
              <ul className="promociones-info-list">
                <li>
                  <FontAwesomeIcon icon={faTag} className="list-icon" />
                  <span>Utiliza el código promocional al finalizar tu compra</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} className="list-icon" />
                  <span>Las promociones tienen una fecha de caducidad</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCalendarAlt} className="list-icon" />
                  <span>Algunas promociones solo están disponibles ciertos días de la semana</span>
                </li>
              </ul>
              <p>
                ¿Tienes alguna pregunta sobre nuestras promociones? No dudes en contactarnos.
              </p>
              <Link to="/contacto" className="btn btn-secondary">
                Contactar
              </Link>
            </div>
            <div className="promociones-info-image">
              <img 
                src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                alt="Promociones especiales" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promociones;

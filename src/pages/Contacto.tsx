import type React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons"
import "./Contacto.css"

interface FormData {
  nombre: string
  email: string
  telefono: string
  asunto: string
  mensaje: string
}

const initialFormData: FormData = {
  nombre: "",
  email: "",
  telefono: "",
  asunto: "",
  mensaje: ""
}

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulación de envío de formulario
    try {
      // Aquí iría la lógica para enviar el formulario a un servidor
      console.log("Formulario enviado:", formData)
      setFormSubmitted(true)
      setFormData(initialFormData)
    } catch (error) {
      setFormError(true)
      console.error("Error al enviar el formulario:", error)
    }
  }

  return (
    <div className="contacto-page">
      <div className="contacto-header">
        <div className="container">
          <h1 className="contacto-title">Contáctanos</h1>
          <p className="contacto-subtitle">
            Estamos aquí para responder tus preguntas y escuchar tus comentarios
          </p>
        </div>
      </div>

      <section className="section contacto-section">
        <div className="container">
          <div className="contacto-content">
            <div className="contacto-info">
              <h2>Información de Contacto</h2>
              <p>
                Nos encantaría saber de ti. Puedes contactarnos por teléfono, email o visitarnos en nuestras ubicaciones.
              </p>

              <div className="contacto-details">
                <div className="contacto-item">
                  <div className="contacto-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="contacto-text">
                    <h3>Dirección</h3>
                    <p>Av. Principal 123, Ciudad</p>
                    <p>Código Postal 12345</p>
                  </div>
                </div>

                <div className="contacto-item">
                  <div className="contacto-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="contacto-text">
                    <h3>Teléfono</h3>
                    <p>(123) 456-7890</p>
                    <p>(123) 456-7891</p>
                  </div>
                </div>

                <div className="contacto-item">
                  <div className="contacto-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="contacto-text">
                    <h3>Email</h3>
                    <p>info@gourmetburger.com</p>
                    <p>reservas@gourmetburger.com</p>
                  </div>
                </div>

                <div className="contacto-item">
                  <div className="contacto-icon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div className="contacto-text">
                    <h3>Horario</h3>
                    <p>Lunes - Jueves: 11:00 - 22:00</p>
                    <p>Viernes - Sábado: 11:00 - 23:00</p>
                    <p>Domingo: 12:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contacto-form-container">
              <h2>Envíanos un Mensaje</h2>
              
              {formSubmitted ? (
                <div className="form-success">
                  <h3>¡Gracias por contactarnos!</h3>
                  <p>Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="contacto-form" onSubmit={handleSubmit}>
                  {formError && (
                    <div className="form-error">
                      <p>Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.</p>
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="asunto">Asunto</label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="consulta">Consulta General</option>
                      <option value="reserva">Reserva</option>
                      <option value="pedido">Problema con un Pedido</option>
                      <option value="sugerencia">Sugerencia</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Encuéntranos</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d-79.9191989!3d-2.1705376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTAnMTMuOSJTIDc5wrA1NScwOS4xIlc!5e0!3m2!1ses!2sec!4v1621436761974!5m2!1ses!2sec"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Ubicación de GourmetBurger"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          
          <div className="faq-container">
            <div className="faq-item">
              <h3 className="faq-question">¿Cómo puedo hacer una reserva?</h3>
              <p className="faq-answer">
                Puedes hacer una reserva llamando a nuestro número de teléfono, enviando un email a reservas@gourmetburger.com o utilizando nuestro formulario de contacto.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">¿Ofrecen opciones vegetarianas o veganas?</h3>
              <p className="faq-answer">
                Sí, contamos con varias opciones vegetarianas y veganas en nuestro menú. Puedes consultar nuestro menú completo en la sección correspondiente.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">¿Tienen servicio a domicilio?</h3>
              <p className="faq-answer">
                Sí, ofrecemos servicio a domicilio en un radio de 10 km alrededor de nuestras ubicaciones. Puedes hacer tu pedido a través de nuestra página web o llamando por teléfono.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">¿Cuál es el tiempo de entrega para pedidos a domicilio?</h3>
              <p className="faq-answer">
                El tiempo de entrega promedio es de 30-45 minutos, dependiendo de la distancia y el tráfico. Siempre nos esforzamos por entregar tu pedido lo más rápido posible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;

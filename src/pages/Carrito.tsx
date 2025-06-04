"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faTrash, 
  faPlus, 
  faMinus, 
  faArrowLeft, 
  faShoppingCart,
  faCreditCard,
  faMoneyBill,
  faStore
} from "@fortawesome/free-solid-svg-icons"
import "./Carrito.css"
import { useCart } from "../context/CartContext"

const Carrito: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()
  const [step, setStep] = useState<number>(1)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    metodoPago: "tarjeta"
  })
  const [orderComplete, setOrderComplete] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulación de procesamiento de pedido
    setTimeout(() => {
      setOrderComplete(true)
      clearCart()
    }, 1500)
  }

  const handleIncrement = (productId: number, currentQuantity: number) => {
    updateQuantity(productId, currentQuantity + 1)
  }

  const handleDecrement = (productId: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1)
    }
  }

  const subtotal = getCartTotal()
  const envio = cartItems.length > 0 ? 3.99 : 0
  const total = subtotal + envio

  if (orderComplete) {
    return (
      <div className="carrito-page">
        <div className="container">
          <div className="order-complete">
            <div className="order-complete-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <h2>¡Pedido Completado!</h2>
            <p>Tu pedido ha sido procesado correctamente.</p>
            <p>Hemos enviado un correo electrónico con los detalles de tu pedido a {formData.email}.</p>
            <p className="order-number">Número de pedido: <strong>#{Math.floor(Math.random() * 10000)}</strong></p>
            <Link to="/menu" className="btn btn-primary">
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="carrito-page">
      <div className="container">
        <div className="carrito-header">
          <h1 className="carrito-title">
            {step === 1 ? "Tu Carrito de Compras" : "Finalizar Compra"}
          </h1>
          <div className="carrito-steps">
            <div className={`step ${step >= 1 ? "active" : ""}`}>
              <div className="step-number">1</div>
              <span className="step-text">Carrito</span>
            </div>
            <div className="step-line"></div>
            <div className={`step ${step >= 2 ? "active" : ""}`}>
              <div className="step-number">2</div>
              <span className="step-text">Información</span>
            </div>
            <div className="step-line"></div>
            <div className={`step ${step >= 3 ? "active" : ""}`}>
              <div className="step-number">3</div>
              <span className="step-text">Pago</span>
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="carrito-content">
            {cartItems.length > 0 ? (
              <>
                <div className="carrito-items">
                  <div className="carrito-table-header">
                    <div className="header-producto">Producto</div>
                    <div className="header-precio">Precio</div>
                    <div className="header-cantidad">Cantidad</div>
                    <div className="header-total">Total</div>
                    <div className="header-acciones"></div>
                  </div>

                  {cartItems.map((item) => (
                    <div className="carrito-item" key={item.id}>
                      <div className="item-producto">
                        <div className="item-image">
                          <img src={item.image || "/placeholder.svg"} alt={item.name} />
                        </div>
                        <div className="item-details">
                          <h3 className="item-name">{item.name}</h3>
                          <p className="item-description">{item.description}</p>
                        </div>
                      </div>
                      <div className="item-precio">${item.price.toFixed(2)}</div>
                      <div className="item-cantidad">
                        <div className="quantity-control">
                          <button 
                            className="quantity-btn"
                            onClick={() => handleDecrement(item.id, item.quantity)}
                            disabled={item.quantity <= 1}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span className="quantity-value">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => handleIncrement(item.id, item.quantity)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>
                      <div className="item-total">${(item.price * item.quantity).toFixed(2)}</div>
                      <div className="item-acciones">
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="carrito-actions">
                    <Link to="/menu" className="btn-back">
                      <FontAwesomeIcon icon={faArrowLeft} />
                      <span>Continuar Comprando</span>
                    </Link>
                    <button className="btn-clear" onClick={clearCart}>
                      Vaciar Carrito
                    </button>
                  </div>
                </div>

                <div className="carrito-summary">
                  <h2 className="summary-title">Resumen del Pedido</h2>
                  
                  <div className="summary-details">
                    <div className="summary-row">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                      <span>Envío</span>
                      <span>${envio.toFixed(2)}</span>
                    </div>
                    <div className="summary-total">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="btn btn-primary checkout-btn"
                    onClick={() => setStep(2)}
                  >
                    Proceder al Pago
                  </button>
                </div>
              </>
            ) : (
              <div className="carrito-empty">
                <div className="empty-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <h2>Tu carrito está vacío</h2>
                <p>Parece que aún no has añadido ningún producto a tu carrito.</p>
                <Link to="/menu" className="btn btn-primary">
                  Ver Menú
                </Link>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="carrito-content">
            <div className="checkout-form-container">
              <h2>Información de Envío</h2>
              <form className="checkout-form" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
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
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="direccion">Dirección</label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="codigoPostal">Código Postal</label>
                    <input
                      type="text"
                      id="codigoPostal"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn-back"
                    onClick={() => setStep(1)}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Volver al Carrito</span>
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                  >
                    Continuar
                  </button>
                </div>
              </form>
            </div>

            <div className="carrito-summary">
              <h2 className="summary-title">Resumen del Pedido</h2>
              
              <div className="summary-items">
                {cartItems.map((item) => (
                  <div className="summary-item" key={item.id}>
                    <div className="summary-item-image">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} />
                      <span className="summary-item-quantity">{item.quantity}</span>
                    </div>
                    <div className="summary-item-info">
                      <h4>{item.name}</h4>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Envío</span>
                  <span>${envio.toFixed(2)}</span>
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="carrito-content">
            <div className="checkout-form-container">
              <h2>Método de Pago</h2>
              <form className="checkout-form" onSubmit={handleSubmit}>
                <div className="payment-methods">
                  <div className="payment-method">
                    <input 
                      type="radio" 
                      id="tarjeta" 
                      name="metodoPago" 
                      value="tarjeta"
                      checked={formData.metodoPago === "tarjeta"}
                      onChange={handleChange}
                    />
                    <label htmlFor="tarjeta">
                      <FontAwesomeIcon icon={faCreditCard} />
                      <span>Tarjeta de Crédito/Débito</span>
                    </label>
                  </div>
                  
                  <div className="payment-method">
                    <input 
                      type="radio" 
                      id="efectivo" 
                      name="metodoPago" 
                      value="efectivo"
                      checked={formData.metodoPago === "efectivo"}
                      onChange={handleChange}
                    />
                    <label htmlFor="efectivo">
                      <FontAwesomeIcon icon={faMoneyBill} />
                      <span>Pago en Efectivo</span>
                    </label>
                  </div>
                  
                  <div className="payment-method">
                    <input 
                      type="radio" 
                      id="tienda" 
                      name="metodoPago" 
                      value="tienda"
                      checked={formData.metodoPago === "tienda"}
                      onChange={handleChange}
                    />
                    <label htmlFor="tienda">
                      <FontAwesomeIcon icon={faStore} />
                      <span>Recoger en Tienda</span>
                    </label>
                  </div>
                </div>

                {formData.metodoPago === "tarjeta" && (
                  <div className="card-details">
                    <div className="form-group">
                      <label htmlFor="cardNumber">Número de Tarjeta</label>
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="cardExpiry">Fecha de Expiración</label>
                        <input
                          type="text"
                          id="cardExpiry"
                          placeholder="MM/AA"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="cardCvc">CVC</label>
                        <input
                          type="text"
                          id="cardCvc"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="cardName">Nombre en la Tarjeta</label>
                      <input
                        type="text"
                        id="cardName"
                        placeholder="NOMBRE APELLIDO"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn-back"
                    onClick={() => setStep(2)}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Volver</span>
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                  >
                    Completar Pedido
                  </button>
                </div>
              </form>
            </div>

            <div className="carrito-summary">
              <h2 className="summary-title">Resumen del Pedido</h2>
              
              <div className="summary-items">
                {cartItems.map((item) => (
                  <div className="summary-item" key={item.id}>
                    <div className="summary-item-image">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} />
                      <span className="summary-item-quantity">{item.quantity}</span>
                    </div>
                    <div className="summary-item-info">
                      <h4>{item.name}</h4>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Envío</span>
                  <span>${envio.toFixed(2)}</span>
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;

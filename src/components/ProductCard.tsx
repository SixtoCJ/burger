"use client"

import type React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons"
import "./ProductCard.css"
import { type Product, useCart } from "../context/CartContext"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image || "/placeholder.svg"} alt={product.name} />
        <button className="favorite-btn">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

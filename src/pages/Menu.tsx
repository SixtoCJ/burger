"use client"

import type React from "react"
import { useState } from "react"
import ProductCard from "../components/ProductCard"
import "./Menu.css"

// Datos de ejemplo
const menuProducts = [
  // Hamburguesas
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
    name: "Hamburguesa Doble",
    description: "Doble carne, doble queso, doble bacon y todas nuestras salsas especiales.",
    price: 14.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "hamburguesas",
  },
  {
    id: 4,
    name: "Hamburguesa Mexicana",
    description: "Con guacamole, jalapeños, queso pepper jack, pico de gallo y salsa picante.",
    price: 11.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "hamburguesas",
  },
  {
    id: 5,
    name: "Hamburguesa BBQ",
    description: "Con salsa BBQ, aros de cebolla, queso cheddar y bacon.",
    price: 11.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "hamburguesas",
  },

  // Vegetarianas
  {
    id: 6,
    name: "Hamburguesa Vegetariana",
    description: "Deliciosa hamburguesa de garbanzos y verduras, con aguacate, rúcula y mayonesa de hierbas.",
    price: 10.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "vegetarianas",
  },
  {
    id: 7,
    name: "Hamburguesa Vegana",
    description: "Hamburguesa de lentejas y champiñones con tomate, lechuga y salsa vegana.",
    price: 11.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "vegetarianas",
  },

  // Acompañamientos
  {
    id: 8,
    name: "Papas Fritas",
    description: "Crujientes papas fritas con nuestra mezcla especial de especias.",
    price: 3.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "acompañamientos",
  },
  {
    id: 9,
    name: "Aros de Cebolla",
    description: "Aros de cebolla rebozados y fritos hasta quedar dorados y crujientes.",
    price: 4.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "acompañamientos",
  },
  {
    id: 10,
    name: "Nachos con Queso",
    description: "Nachos crujientes con queso cheddar derretido, jalapeños y pico de gallo.",
    price: 6.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "acompañamientos",
  },

  // Bebidas
  {
    id: 11,
    name: "Refresco",
    description: "Variedad de refrescos en lata.",
    price: 1.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "bebidas",
  },
  {
    id: 12,
    name: "Batido",
    description: "Batidos cremosos de chocolate, vainilla o fresa.",
    price: 4.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "bebidas",
  },

  // Postres
  {
    id: 13,
    name: "Brownie con Helado",
    description: "Brownie caliente con helado de vainilla y salsa de chocolate.",
    price: 5.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "postres",
  },
  {
    id: 14,
    name: "Tarta de Queso",
    description: "Cremosa tarta de queso con salsa de frutos rojos.",
    price: 4.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "postres",
  },

  // Combos
  {
    id: 15,
    name: "Combo Individual",
    description: "Hamburguesa clásica, papas fritas y refresco.",
    price: 12.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "combos",
  },
  {
    id: 16,
    name: "Combo Familiar",
    description: "4 hamburguesas clásicas, 2 porciones grandes de papas fritas y 4 bebidas.",
    price: 34.99,
    image: "https://media.istockphoto.com/id/496389174/es/foto/deliciosas-hamburguesas.jpg?s=612x612&w=0&k=20&c=NTeINezZDv80MRn2kHbR94MAvCBawq_obcOoSae3W9w=",
    category: "combos",
  },
]

const categories = [
  { id: "todos", name: "Todos" },
  { id: "hamburguesas", name: "Hamburguesas" },
  { id: "vegetarianas", name: "Vegetarianas" },
  { id: "acompañamientos", name: "Acompañamientos" },
  { id: "bebidas", name: "Bebidas" },
  { id: "postres", name: "Postres" },
  { id: "combos", name: "Combos" },
]

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("todos")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = menuProducts.filter((product) => {
    const matchesCategory = activeCategory === "todos" || product.category === activeCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="menu-page">
      <div className="menu-header">
        <div className="container">
          <h1>Nuestro Menú</h1>
          <p>Descubre nuestra selección de hamburguesas gourmet y acompañamientos</p>
        </div>
      </div>

      <div className="menu-content section">
        <div className="container">
          <div className="menu-filters">
            <div className="category-filter">
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      className={activeCategory === category.id ? "active" : ""}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="search-filter">
              <input
                type="text"
                placeholder="Buscar en el menú..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="menu-products">
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No se encontraron productos que coincidan con tu búsqueda.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu

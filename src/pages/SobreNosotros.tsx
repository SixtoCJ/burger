import type React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faUtensils, 
  faLeaf, 
  faHandshake, 
  faUsers, 
  faStar, 
  faHistory 
} from "@fortawesome/free-solid-svg-icons"
import "./SobreNosotros.css"

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  bio: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    position: "Chef Ejecutivo",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Con más de 15 años de experiencia en la gastronomía, Carlos es el creador de nuestras deliciosas recetas de hamburguesas."
  },
  {
    id: 2,
    name: "María González",
    position: "Gerente General",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "María se asegura de que cada cliente tenga una experiencia excepcional en nuestro restaurante."
  },
  {
    id: 3,
    name: "Javier López",
    position: "Chef de Cocina",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    bio: "Javier es un experto en la preparación de hamburguesas gourmet y en la selección de los mejores ingredientes."
  },
  {
    id: 4,
    name: "Ana Martínez",
    position: "Responsable de Calidad",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    bio: "Ana se encarga de garantizar que todos nuestros productos cumplan con los más altos estándares de calidad."
  }
];

const SobreNosotros: React.FC = () => {
  return (
    <div className="sobre-nosotros-page">
      <div className="sobre-nosotros-header">
        <div className="container">
          <h1 className="sobre-nosotros-title">Sobre Nosotros</h1>
          <p className="sobre-nosotros-subtitle">
            Conoce nuestra historia, valores y el equipo detrás de las mejores hamburguesas gourmet
          </p>
        </div>
      </div>

      <section className="section historia-section">
        <div className="container">
          <div className="historia-content">
            <div className="historia-text">
              <h2 className="section-title">Nuestra Historia</h2>
              <p>
                GourmetBurger nació en 2010 con una simple pero poderosa idea: crear las hamburguesas más deliciosas y de la más alta calidad utilizando ingredientes frescos y locales. Lo que comenzó como un pequeño local con apenas cinco mesas, se ha convertido en uno de los restaurantes de hamburguesas más reconocidos de la ciudad.
              </p>
              <p>
                Nuestro fundador, Carlos Rodríguez, un apasionado de la gastronomía, decidió combinar técnicas culinarias tradicionales con sabores innovadores para crear hamburguesas únicas que deleitaran hasta los paladares más exigentes.
              </p>
              <p>
                A lo largo de los años, hemos mantenido nuestro compromiso con la calidad y la excelencia, expandiendo nuestro menú y abriendo nuevas sucursales, pero siempre manteniendo la esencia que nos ha hecho famosos: hamburguesas artesanales preparadas con amor y los mejores ingredientes.
              </p>
            </div>
            <div className="historia-image">
              <img 
                src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                alt="Historia de GourmetBurger" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section valores-section">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          
          <div className="valores-grid">
            <div className="valor-card">
              <div className="valor-icon">
                <FontAwesomeIcon icon={faUtensils} />
              </div>
              <h3 className="valor-title">Calidad Premium</h3>
              <p className="valor-description">
                Utilizamos solo ingredientes de la más alta calidad, seleccionados cuidadosamente para garantizar el mejor sabor en cada bocado.
              </p>
            </div>

            <div className="valor-card">
              <div className="valor-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h3 className="valor-title">Sostenibilidad</h3>
              <p className="valor-description">
                Nos comprometemos con prácticas sostenibles, desde la selección de proveedores locales hasta la reducción de residuos.
              </p>
            </div>

            <div className="valor-card">
              <div className="valor-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h3 className="valor-title">Servicio Excepcional</h3>
              <p className="valor-description">
                Nos esforzamos por ofrecer una experiencia excepcional a cada cliente, con un servicio amable y atento.
              </p>
            </div>

            <div className="valor-card">
              <div className="valor-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="valor-title">Comunidad</h3>
              <p className="valor-description">
                Apoyamos a nuestra comunidad local a través de diversas iniciativas y colaboraciones con productores de la región.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Nuestra Trayectoria</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={faHistory} />
              </div>
              <div className="timeline-content">
                <h3>2010</h3>
                <p>Apertura de nuestro primer local en el centro de la ciudad.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="timeline-content">
                <h3>2013</h3>
                <p>Reconocimiento como "Mejor Hamburguesa de la Ciudad" por la revista Gastronómica.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={faUtensils} />
              </div>
              <div className="timeline-content">
                <h3>2015</h3>
                <p>Expansión del menú con opciones vegetarianas y veganas.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="timeline-content">
                <h3>2018</h3>
                <p>Apertura de tres nuevas sucursales en diferentes zonas de la ciudad.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <div className="timeline-content">
                <h3>2020</h3>
                <p>Implementación de prácticas sostenibles en todos nuestros locales.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <div className="timeline-content">
                <h3>2023</h3>
                <p>Celebración de nuestro décimo aniversario con la apertura de nuestro local insignia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Nuestro Equipo</h2>
          
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.id}>
                <div className="team-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;

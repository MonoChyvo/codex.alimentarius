import { Link } from 'react-router-dom'
import { FaHome, FaBook, FaWarehouse, FaChartPie, FaUtensils, FaLeaf } from 'react-icons/fa'
import './Home.css'

export const Home = ({ items, setItems }) => {
  // Calcular estadísticas del almacén
  const totalProductos = items.Frutas.length + items.Verduras.length
  const totalFrutas = items.Frutas.length
  const totalVerduras = items.Verduras.length

  return (
    <div className='home-container'>
      {/* Barra lateral */}
      <aside className='sidebar'>
        <div className='sidebar-header'>
          <h2>Codex Alimentarius</h2>
        </div>
        <nav className='sidebar-nav'>
          <Link
            to='/'
            className='nav-item active'>
            <FaHome /> Inicio
          </Link>
          <Link
            to='/recetarios'
            className='nav-item'>
            <FaBook /> Recetarios
          </Link>
          <Link
            to='/almacen'
            className='nav-item'>
            <FaWarehouse /> Almacén
          </Link>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className='main-content'>
        <div className='content-header'>
          <h1 className='content-title'>Panel Principal</h1>
        </div>

        {/* Sección de estadísticas */}
        <div className='stats-container'>
          <div className='stat-card'>
            <div className='stat-icon'>
              <FaWarehouse />
            </div>
            <div className='stat-count'>{totalProductos}</div>
            <div className='stat-title'>Productos en Almacén</div>
          </div>
          <div className='stat-card'>
            <div className='stat-icon'>
              <FaLeaf />
            </div>
            <div className='stat-count'>{totalFrutas}</div>
            <div className='stat-title'>Frutas registradas</div>
          </div>
          <div className='stat-card'>
            <div className='stat-icon'>
              <FaUtensils />
            </div>
            <div className='stat-count'>{totalVerduras}</div>
            <div className='stat-title'>Verduras registradas</div>
          </div>
        </div>

        {/* Sección de características */}
        <h2 className='section-header'>Funcionalidades principales</h2>
        <div className='features-grid'>
          <div className='feature-card'>
            <div className='feature-icon'>
              <FaChartPie />
            </div>
            <h3>Calcula Recetas</h3>
            <p>
              Calcula costos y porciones de tus recetas con precición. Optimiza tus recursos y mejora tu planificación
              de menú.
            </p>
            <div className='feature-actions'>
              <Link
                to='/recetarios'
                className='btn btn-primary'>
                Crear Receta
              </Link>
            </div>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>
              <FaWarehouse />
            </div>
            <h3>Gestiona Ingredientes</h3>
            <p>
              Lleva un registro completo de tus productos, precios y cantidades. Organiza tu inventario con facilidad.
            </p>
            <div className='feature-actions'>
              <Link
                to='/almacen'
                className='btn btn-primary'>
                Ir al Almacén
              </Link>
            </div>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>
              <FaBook />
            </div>
            <h3>Crea Recetarios</h3>
            <p>Guarda y organiza tus recetas en recetarios temáticos. Accede a tus creaciones en cualquier momento.</p>
            <div className='feature-actions'>
              <Link
                to='/recetarios'
                className='btn btn-primary'>
                Ver Recetarios
              </Link>
            </div>
          </div>
        </div>

        <footer className='content-footer'>
          <p>&copy; {new Date().getFullYear()} Codex Alimentarius - Desarrollado por MonoChyvo.Inc</p>
        </footer>
      </main>
    </div>
  )
}

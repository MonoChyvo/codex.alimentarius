import { Link } from 'react-router-dom'
import { FaHome, FaBook, FaWarehouse, FaPlus, FaUtensils, FaEye, FaRegSadTear } from 'react-icons/fa'
import './Recetarios.css'

export const Recetarios = () => {
  // Datos de ejemplo para recetas (simularíamos aquí una carga real de datos)
  const recetas = [
    {
      id: 1,
      titulo: 'Ensalada de Frutas',
      categoria: 'Postres',
      porciones: 4,
      costo: 120.5,
      peso: 800,
    }
  ]

  return (
    <div className='recetarios-container'>
      {/* Barra lateral */}
      <aside className='sidebar'>
        <div className='sidebar-header'>
          <h2>Codex Alimentarius</h2>
        </div>
        <nav className='sidebar-nav'>
          <Link
            to='/'
            className='nav-item'>
            <FaHome /> Inicio
          </Link>
          <Link
            to='/recetarios'
            className='nav-item active'>
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
          <h1 className='content-title'>Mis Recetarios</h1>
          <button className='btn btn-primary'>
            <FaPlus /> Nueva Receta
          </button>
        </div>

        <div className='content-body'>
          {recetas.length > 0 ? (
            recetas.map((receta) => (
              <div
                className='recipe-card'
                key={receta.id}>
                <div className='recipe-header'>
                  <h3 className='recipe-title'>{receta.titulo}</h3>
                  <span className='recipe-category'>{receta.categoria}</span>
                </div>
                <p>Una deliciosa receta preparada con los mejores ingredientes, ideal para cualquier ocasión.</p>
                <div className='recipe-stats'>
                  <div className='stat-item'>
                    <div className='stat-label'>Porciones</div>
                    <div className='stat-value'>{receta.porciones}</div>
                  </div>
                  <div className='stat-item'>
                    <div className='stat-label'>Costo Total</div>
                    <div className='stat-value'>${receta.costo.toFixed(2)}</div>
                  </div>
                  <div className='stat-item'>
                    <div className='stat-label'>Costo/Porción</div>
                    <div className='stat-value'>${(receta.costo / receta.porciones).toFixed(2)}</div>
                  </div>
                  <div className='stat-item'>
                    <div className='stat-label'>Peso Total</div>
                    <div className='stat-value'>{receta.peso}g</div>
                  </div>
                </div>
                <div className='action-buttons'>
                  <button className='btn btn-outline'>
                    <FaEye /> Ver Detalles
                  </button>
                  <button className='btn btn-primary'>
                    <FaUtensils /> Cocinar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className='empty-state'>
              <FaRegSadTear className='empty-icon' />
              <h3>No hay recetas disponibles</h3>
              <p>Comienza agregando tu primera receta</p>
              <button className='btn btn-primary'>
                <FaPlus /> Agregar Receta
              </button>
            </div>
          )}
        </div>

        <footer className='content-footer'>
          <p>&copy; 2023 Codex Alimentarius - Todos los derechos reservados</p>
        </footer>
      </main>
    </div>
  )
}

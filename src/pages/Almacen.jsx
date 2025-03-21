import { Link } from 'react-router-dom'
import { ListaProductos } from '../components/ListaProductos'
import { AgregarProducto } from '../components/AgregarProducto'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { FaHome, FaBook, FaWarehouse, FaPlus, FaListAlt } from 'react-icons/fa'
import './Almacen.css'

export const Almacen = ({ items, setItems }) => {
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [unidad, setUnidad] = useState('')
  const [tipo, setTipo] = useState('')

  const agregarItem = () => {
    const nuevoItem = {
      id: nanoid(),
      nombre: nombre,
      precio: precio,
      unidad: unidad,
      tipo: tipo,
    }

    if (nuevoItem.tipo === 'Frutas') {
      setItems((prevState) => {
        return { ...prevState, Frutas: [...prevState.Frutas, nuevoItem] }
      })
    } else {
      setItems((prevState) => {
        return { ...prevState, Verduras: [...prevState.Verduras, nuevoItem] }
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre) return
    agregarItem()
    setNombre('')
    setPrecio('')
    setUnidad('')
    setTipo('')
  }

  return (
    <div className='almacen-container'>
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
            className='nav-item'>
            <FaBook /> Recetarios
          </Link>
          <Link
            to='/almacen'
            className='nav-item active'>
            <FaWarehouse /> Almacén
          </Link>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className='main-content'>
        <div className='content-header'>
          <h1 className='content-title'>Gestión de Almacén</h1>
        </div>

        <div className='content-body'>
          {/* Formulario para agregar producto */}
          <div className='card'>
            <h2 className='card-title'>Agregar Nuevo Producto</h2>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='nombre'>Nombre del Producto</label>
                <input
                  id='nombre'
                  type='text'
                  className='form-control'
                  placeholder='Ingrese nombre del producto'
                  autoFocus
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='tipo'>Tipo de Producto</label>
                <select
                  id='tipo'
                  className='form-control'
                  required
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}>
                  <option value=''>Seleccione tipo</option>
                  <option value='Frutas'>Frutas</option>
                  <option value='Verduras'>Verduras</option>
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor='precio'>Precio</label>
                <input
                  id='precio'
                  type='number'
                  className='form-control'
                  step='0.01'
                  required
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='unidad'>Unidad</label>
                <select
                  id='unidad'
                  className='form-control'
                  required
                  value={unidad}
                  onChange={(e) => setUnidad(e.target.value)}>
                  <option value=''>Seleccione unidad</option>
                  <option value='Kilo'>Kilo</option>
                  <option value='Litro'>Litro</option>
                  <option value='Pieza'>Pieza</option>
                </select>
              </div>

              <button
                type='submit'
                className='btn btn-primary'>
                <FaPlus /> Agregar Producto
              </button>
            </form>
          </div>

          {/* Lista de productos */}
          <div className='card'>
            <h2 className='card-title'>Productos en Almacén</h2>
            <ListaProductos
              items={items}
              setItems={setItems}
            />
          </div>
        </div>

        <footer className='content-footer'>
          <p>&copy; {new Date().getFullYear()} Codex Alimentarius - Desarrollado por MonoChyvo.Inc</p>
        </footer>
      </main>
    </div>
  )
}

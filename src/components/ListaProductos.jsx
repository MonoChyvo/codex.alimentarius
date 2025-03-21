import React, { useState } from 'react'
import { FaTrashAlt, FaAppleAlt, FaCarrot } from 'react-icons/fa'

export const ListaProductos = ({ items, setItems }) => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Todos')
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)

  const handleDeleteItem = (tipo, nombre) => {
    const itemsCopy = { ...items }
    if (tipo === 'Frutas') {
      itemsCopy.Frutas = itemsCopy.Frutas.filter((fruta) => fruta.nombre !== nombre)
    } else if (tipo === 'Verduras') {
      itemsCopy.Verduras = itemsCopy.Verduras.filter((verdura) => verdura.nombre !== nombre)
    }
    setItems(itemsCopy)
    if (productoSeleccionado && productoSeleccionado.nombre === nombre) {
      setProductoSeleccionado(null)
    }
  }

  const getTodosLosProductos = () => {
    const frutas = items.Frutas.map((item) => ({ ...item, tipo: 'Frutas' }))
    const verduras = items.Verduras.map((item) => ({ ...item, tipo: 'Verduras' }))
    return [...frutas, ...verduras]
  }

  const getProductosFiltrados = () => {
    if (tipoSeleccionado === 'Todos') {
      return getTodosLosProductos()
    } else if (tipoSeleccionado === 'Frutas') {
      return items.Frutas.map((item) => ({ ...item, tipo: 'Frutas' }))
    } else {
      return items.Verduras.map((item) => ({ ...item, tipo: 'Verduras' }))
    }
  }

  const productosFiltrados = getProductosFiltrados()

  return (
    <div>
      <div
        className='filters'
        style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button
          className={`btn ${tipoSeleccionado === 'Todos' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setTipoSeleccionado('Todos')}>
          Todos
        </button>
        <button
          className={`btn ${tipoSeleccionado === 'Frutas' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setTipoSeleccionado('Frutas')}>
          <FaAppleAlt /> Frutas
        </button>
        <button
          className={`btn ${tipoSeleccionado === 'Verduras' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setTipoSeleccionado('Verduras')}>
          <FaCarrot /> Verduras
        </button>
      </div>

      {productosFiltrados.length > 0 ? (
        <div className='product-list'>
          {productosFiltrados.map((producto) => (
            <div
              className='product-card'
              key={producto.id}
              onClick={() => setProductoSeleccionado(producto)}>
              <div
                className='product-header'
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className='product-name'>{producto.nombre}</h3>
                <button
                  className='btn-icon'
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteItem(producto.tipo, producto.nombre)
                  }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc3545' }}>
                  <FaTrashAlt />
                </button>
              </div>
              <div className='product-detail'>
                <span>Precio:</span>
                <span>${producto.precio}</span>
              </div>
              <div className='product-detail'>
                <span>Unidad:</span>
                <span>{producto.unidad}</span>
              </div>
              <div className='product-detail'>
                <span>Tipo:</span>
                <span>{producto.tipo}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px', color: '#6c757d' }}>
          <p>No hay productos disponibles en esta categoría.</p>
        </div>
      )}

      {productoSeleccionado && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3>Detalles del producto</h3>
          <p>
            <strong>Nombre:</strong> {productoSeleccionado.nombre}
          </p>
          <p>
            <strong>Precio:</strong> ${productoSeleccionado.precio}
          </p>
          <p>
            <strong>Unidad:</strong> {productoSeleccionado.unidad}
          </p>
          <p>
            <strong>Tipo:</strong> {productoSeleccionado.tipo}
          </p>
        </div>
      )}
    </div>
  )
}

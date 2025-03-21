import { useEffect, useState } from 'react'

export const ProductoSeleccionado = ({ nombreProducto, items }) => {
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    const productoEncontrado =
      items.Frutas.find((fruta) => fruta.nombre === nombreProducto) ||
      items.Verduras.find((verdura) => verdura.nombre === nombreProducto)

    setProducto(productoEncontrado)
  }, [nombreProducto, items]) // Agregar items como dependencia

  if (!producto) {
    return <div>No se encontró el producto "{nombreProducto}"</div>
  }

  return (
    <div className='productoDisplay'>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Unidad: {producto.unidad}</p>
    </div>
  )
}

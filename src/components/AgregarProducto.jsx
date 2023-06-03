export const AgregarProducto = ({ nombre, setNombre, precio, setPrecio, unidad, setUnidad, tipo, setTipo, handleSubmit }) => {

  const handleUnidadChange = (e) => {
    setUnidad(e.target.value);
  };

  const handleTipoChange = (e) => {
    setTipo(e.target.value);
  };

  return (
    <div className="agregarProducto">

      <h1>Nuevo producto</h1>

      <form onSubmit={handleSubmit} >

          <input
            placeholder="Ingrese nombre del producto"
            autoFocus
            required
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />

        <div className="form-input">
          <label htmlFor="tipo">Tipo:</label>
          <select
            required
            id="tipo"
            value={tipo}
            onChange={handleTipoChange}
          >
            <option value=""></option>
            <option value="Frutas">Frutas</option>
            <option value="Verduras">Verduras</option>
          </select>
        </div>

        <div className="form-input">
          <label htmlFor="precio">Precio:</label>
          <input
            required
            id="precio"
            type="number"
            value={precio}
            step="0.01"
            onChange={(e) => setPrecio(e.target.value)} />
        </div>

        <div className="form-input">
          <label htmlFor="unidad">Unidad:</label>
          <select
            required
            id="unidad"
            value={unidad}
            onChange={handleUnidadChange}
          >
            <option value=""></option>
            <option value='Kilo'>Kilo</option>
            <option value='Litro'>Litro</option>
            <option value='Pieza'>Pieza</option>
          </select>
        </div>

        <button type="submit">
          Agregar
        </button>

      </form>
    </div>
  );
};

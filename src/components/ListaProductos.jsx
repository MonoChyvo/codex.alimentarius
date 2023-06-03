import React, { useState } from 'react';
import { ProductoSeleccionado } from './ProductoSeleccionado';
import { FaTrashAlt } from 'react-icons/fa';

export const ListaProductos = ({ items, setItems }) => {
  const [frutaSeleccionada, setFrutaSeleccionada] = useState('');
  const [verduraSeleccionada, setVerduraSeleccionada] = useState('');

  let opcionesFrutas = items.Frutas;
  let opcionesVerduras = items.Verduras;

  if (items && items.Frutas) {
    opcionesFrutas = items.Frutas.map((fruta) => (
      <option key={fruta.id} value={fruta.nombre}>
        {fruta.nombre}
      </option>
    ));
  }

  if (items && items.Verduras) {
    opcionesVerduras = items.Verduras.map((verdura) => (
      <option key={verdura.id} value={verdura.nombre}>
        {verdura.nombre}
      </option>
    ));
  }

  function handleSelectChange(e) {
    const { id, value } = e.target;

    if (id === 'frutas') {
      setFrutaSeleccionada(value);
      setVerduraSeleccionada('');
    }
    else if (id === 'verduras') {
      setVerduraSeleccionada(value);
      setFrutaSeleccionada('');
    }
  }

  function handleDeleteItem() {
    const itemsCopy = { ...items };
    if (frutaSeleccionada) {
      itemsCopy.Frutas = itemsCopy.Frutas.filter((fruta) => fruta.nombre !== frutaSeleccionada);
    }
    else if (verduraSeleccionada) {
      itemsCopy.Verduras = itemsCopy.Verduras.filter((verdura) => verdura.nombre !== verduraSeleccionada);
    }
    setItems(itemsCopy);
    setFrutaSeleccionada("");
    setVerduraSeleccionada("");
  }


  return (
    <div className='contenedorListas'>

      <div className='productos'>
        <div className='frutas'>
          <label htmlFor='frutas'>Frutas: </label>
          <select id='frutas' value={frutaSeleccionada} onChange={handleSelectChange}>
            <option value=''></option>
            {opcionesFrutas}
          </select>
          {frutaSeleccionada && (
            <button id='frutas' value={frutaSeleccionada} onClick={handleDeleteItem}>
              <FaTrashAlt />
            </button>
          )}
        </div>

        <div className='verduras'>
          <label htmlFor='verduras'>Verduras: </label>
          <select id='verduras' value={verduraSeleccionada} onChange={handleSelectChange}>
            <option value=''></option>
            {opcionesVerduras}
          </select>
          {verduraSeleccionada && (
            <button id='verduras' value={verduraSeleccionada} onClick={handleDeleteItem}>
              <FaTrashAlt />
            </button>
          )}
        </div>
      </div>

      {frutaSeleccionada || verduraSeleccionada ? (
        <ProductoSeleccionado
          nombreProducto={frutaSeleccionada || verduraSeleccionada}
          items={items}
        />
      ) : null}
    </div>
  );
};

import React, { useState } from "react";
import { Receta } from "./Receta";
import { FaTrashAlt } from 'react-icons/fa';

export const TablaCosteo = ({ items, setItems }) => {

  const [data, setData] = useState([]);
  const [newQuantity, setNewQuantity] = useState('');
  const [newCost, setNewCost] = useState('');
  const [newUnit, setNewUnit] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const [frutaSeleccionada, setFrutaSeleccionada] = useState('');
  const [nombreReceta, setNombreReceta] = useState('');

  const actualizarReceta = (valorReceta) => {
    setNombreReceta(valorReceta);
  };

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

  const handleAdd = () => {
    const newItemObject = {
      id: window.crypto.randomUUID(),
      item: frutaSeleccionada,
      quantity: newQuantity,
      price: newCost,
      unit: newUnit
    };
    const newData = [...data, newItemObject];
    setData(newData);
    setNewQuantity('');
    setNewCost('');
    setNewUnit('');
    setFrutaSeleccionada('');

    const costoTotal = newData.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0);
    setTotalCost(costoTotal);

    const pesoTotal = newData.reduce((acc, curr) => {
      return acc += parseFloat(curr.quantity);
    }, 0);
    setTotalWeight(pesoTotal);
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);

    const costoTotal = newData.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0);
    setTotalCost(costoTotal);

    const pesoTotal = newData.reduce((acc, curr) => {
      return acc += parseFloat(curr.quantity);
    }, 0);
    setTotalWeight(pesoTotal);
  };

  const handleEdit = (id, field, value) => {
    const newData = [...data];
    const index = data.findIndex((item) => item.id === id);
    newData[index][field] = value;
    setData(newData);

    const costoTotal = newData.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0);
    setTotalCost(costoTotal);

    const pesoTotal = newData.reduce((acc, curr) => {
      return acc += parseFloat(curr.quantity);
    }, 0);
    setTotalWeight(pesoTotal);
  };

  return (
    <div className="tablaCosteo">

      <div className="tarjetaRecetario">

        <Receta
          totalCost={totalCost}
          totalWeight={totalWeight}
          actualizarReceta={actualizarReceta}
        />

        <ul className="tarjetaReceta">
          <div className="tarjetaReceta-header">
            <h4>Receta</h4>
            <h3>"{nombreReceta}"</h3>
          </div>

          <div className="tarjetaReceta-main">
            {data.map((dato) => (
              <div
                className="tarjetaReceta-item"
                key={dato.id}
              >
                <li> {dato.item} </li>
                <p> {dato.quantity} {dato.unit === 'Kilo' ? 'gr'
                  : dato.unit === 'Litro' ? 'ml'
                    : dato.unit === 'Pieza' && dato.quantity > 1 ? 'pzas'
                      : dato.unit === 'Pieza' && dato.quantity == 1 ? 'pza' : ''} </p>
              </div>
            ))}
          </div>
        </ul>

      </div>

      <div className="tablaIngredientes">
        <table>

          <thead>

            <tr>
              <th>Ingrediente</th>
              <th>Cantidad</th>
              <th>Unidad</th>
              <th>Costo</th>
            </tr>

            <tr>
              <td>
                <select
                  className="ingredienteInput"
                  id="frutas"
                  value={frutaSeleccionada}
                  onChange={(e) => setFrutaSeleccionada(e.target.value)}>
                  <option value="">Selecciona ingrediente</option>
                  {opcionesFrutas}
                  {opcionesVerduras}
                </select>
              </td>

              <td>
                <input
                className="cantidadInput"
                  type="number"
                  name="cantidad"
                  step="0.01"
                  value={newQuantity}
                  onChange={(e) => setNewQuantity(e.target.value)}
                  required />
              </td>

              <td>
                <select
                  className="unidadInput"
                  name="unidad"
                  value={newUnit}
                  onChange={(e) => setNewUnit(e.target.value)}
                  required>
                  <option value=''></option>
                  <option value='Kilo'>Kilo</option>
                  <option value="Litro">Litro</option>
                  <option value="Pieza">Pieza</option>
                </select>

              </td>

              <td>
                <input
                  type="number"
                  name="precio"
                  step="0.01"
                  value={newCost}
                  onChange={(e) => setNewCost(e.target.value)}
                  required />
              </td>

              <td>
                <button type="submit" onClick={handleAdd}>Agregar</button>
              </td>
            </tr>

            <tr>
              <td>Costo Total:</td>
              <td>$ {totalCost.toFixed(2)}</td>
            </tr>

          </thead>

          <tbody>

            {data.map((item) => (
              <tr key={item.id}>

                <td>
                  <input
                    type="text"
                    value={item.item}
                    onChange={(e) => handleEdit(item.id, 'item', e.target.value)}
                  />
                </td>

                <td>
                  <input
                    className="cantidadInput"
                    type="number"
                    step="0.01"
                    value={item.quantity}
                    onChange={(e) => handleEdit(item.id, 'quantity', e.target.value)}
                  />
                </td>

                <td>
                
                  <select
                    className="unidadInput"
                    name="unidad"
                    value={item.unit}
                    onChange={(e) => handleEdit(item.id, 'unit', e.target.value)}
                    required>
                    <option value=''></option>
                    <option value='Kilo'>Kilo</option>
                    <option value="Litro">Litro</option>
                    <option value="Pieza">Pieza</option>
                  </select>
                </td>

                <td>
                  <input
                    type="number"
                    step="0.01"
                    value={item.price}
                    onChange={(e) => handleEdit(item.id, 'price', e.target.value)}
                  />
                </td>
                <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>
                    <FaTrashAlt />
                  </button>
                </td>

              </tr>

            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};
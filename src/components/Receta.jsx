import React, { useState } from "react";

export const Receta = ({ totalCost, totalWeight, actualizarReceta }) => {

    const [numeroPorcion, setNumeroPorcion] = useState(1);
    const [nombreReceta, setNombreReceta] = useState('');

    const handleRecetaChange = (e) => {
        const valorReceta = e.target.value;
        setNombreReceta(valorReceta);
        actualizarReceta(valorReceta);
    };

    return (
        <form className="receta">

            <div className="receta-formulario">
                <input
                    // style={{ textTransform: 'capitalize' }}
                    placeholder="Nombre de la receta"
                    type="text"
                    id="nombreReceta"
                    name="name"
                    value={nombreReceta}
                    onChange={handleRecetaChange}
                />
            </div>

            <div className="receta-formulario">
                <label htmlFor="porciones">Número de porciones</label>
                <input
                    type="number"
                    id="porciones"
                    name="numServings"
                    value={numeroPorcion}
                    onChange={(e) => setNumeroPorcion(e.target.value)}
                />
            </div>

            <div className="receta-formulario">
                <p>Peso por porción</p>
                <p className="recetaInfo"> {(totalWeight / numeroPorcion).toFixed(3)} gr</p>
            </div>

            <div className="receta-formulario">
                <p>Peso total</p>
                <p className="recetaInfo"> {totalWeight.toFixed(3)} gr </p>
            </div>

            <div className="receta-formulario">
                <p>Costo por porción</p>
                <p className="recetaInfo">$ {(totalCost / numeroPorcion).toFixed(2)}</p>
            </div>

            <div className="receta-formulario">
                <p>Costo total</p>
                <p className="recetaInfo">$ {totalCost.toFixed(2)}</p>
            </div>

        </form>
    );
};

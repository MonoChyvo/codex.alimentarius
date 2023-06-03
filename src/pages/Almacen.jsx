import { Link } from "react-router-dom";
import { ListaProductos } from "../components/ListaProductos";
import { AgregarProducto } from "../components/AgregarProducto";
import { useState } from "react";
import { nanoid } from "nanoid";

export const Almacen = ({ items, setItems }) => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [unidad, setUnidad] = useState('');
    const [tipo, setTipo] = useState('');

    const agregarItem = () => {
        const nuevoItem =
        {
            id: nanoid(),
            nombre: nombre,
            precio: precio,
            unidad: unidad,
            tipo: tipo
        };

        if (nuevoItem.tipo === 'Frutas') {
            setItems(prevState => {
                return { ...prevState, Frutas: [...prevState.Frutas, nuevoItem] };
            });
        }
        else {
            setItems(prevState => {
                return { ...prevState, Verduras: [...prevState.Verduras, nuevoItem] };
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre) return;
        agregarItem();
        setNombre('');
        setPrecio('');
        setUnidad('');
        setTipo('');
    };

    return (
        <section className="Almacen">

            <div className="header">
                <h1>ALMACEN</h1>
                <div className="navBar">
                    <Link to={"/"} >
                        <p>Home</p>
                    </Link>
                </div>
            </div>

            <div className="productosAlmacen">

                <AgregarProducto
                    nombre={nombre}
                    setNombre={setNombre}
                    precio={precio}
                    setPrecio={setPrecio}
                    unidad={unidad}
                    setUnidad={setUnidad}
                    tipo={tipo}
                    setTipo={setTipo}
                    handleSubmit={handleSubmit}
                />

                <ListaProductos
                    items={items}
                    setItems={setItems}
                />
            </div>

            <p className="footer">&copy; MonoChyvo.Inc</p>

        </section>
    );
};




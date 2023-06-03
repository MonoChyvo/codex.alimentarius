import { Link } from "react-router-dom";
import { TablaCosteo } from '../components/TablaCosteo';

export const Home = ({ items, setItems }) => {

  return (
    <section className="Home">

      <div className="header">
        <h1>HOME</h1>
        <div className="navBar">
          <Link to={"/almacen"} >
            <p>Almacén</p>
          </Link>
          <Link to={"/recetarios"} >
            <p>Recetarios</p>
          </Link>
        </div>
      </div>

      <TablaCosteo items={items} setItems={setItems} />

      <p className="footer">
        &copy; MonoChyvo.Inc
      </p>

    </section>
  );
};
import { Link } from "react-router-dom";

export const Recetarios = () => {
    return (
        <section className="Recetarios">

            <h1 className="header">RECETARIOS</h1>

            <div className="navBar">
                <Link to={"/"} >
                    <p>Home</p>
                </Link>
            </div>

            <h1>RECETARIOS</h1>

            <p className="footer">&copy; MonoChyvo.Inc</p>

        </section>
    );
};
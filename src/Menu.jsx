import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="navbar">
            <img src="logo.png" width={80} height={100}></img>
            <h1>Academia de Baile - "Sergio El Bailador"</h1>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/ofertadecursos">Oferta de Cursos</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;

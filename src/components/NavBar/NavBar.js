import './NavBar.css';
import logo from './logo_1000feet_home.svg';

import CartWidget from '../CartWidget/CartWidget';

const NavBar = () =>{

    return(
        <header>
            <nav>
                <ul>
                    <li><a href="pages/mision.html">MISIÓN</a></li>
                    <li><a href="pages/productos.html">PRODUCTOS</a></li>
                    <li><a href="pages/comunidad.html">COMUNIDAD</a></li>
                    <li><a href="pages/contacto.html">CONTACTO</a></li>
                </ul>
                <a className="logo" href="index.html"><img src={logo} alt="1000feet"/></a>
                <CartWidget/>
            </nav>
        </header>

    )
}

export default NavBar;
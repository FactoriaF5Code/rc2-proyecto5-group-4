import '../Components/Header.css';
import NavLink  from "../Nav/NavLink";
import logo from '../assets/logoNetflix.png'

export default function Header () {

    return (
        <header>
            <img src={logo} alt="Netflix" className="logo" />
            <nav>
                <NavLink name="Inicio" />
                <NavLink name="Series" />
                <NavLink name="Películas" />
                <NavLink name="Explorar por idiomas"/>
            </nav>
        </header>
    );
}
import './Header.css';
import NavLink  from "./NavLink";

export default function Header () {


    return (
        <header>
            <img src="" alt="" />
            <nav>
                <NavLink name='Inicio' />
                <NavLink name="Series" />
                <NavLink name="Películas" />
            </nav>
        </header>
    );
}
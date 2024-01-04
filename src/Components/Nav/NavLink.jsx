/* eslint-disable react/prop-types */
import './NavLink.css';
import { Link } from "react-router-dom";


export default function NavLink ({name}) {

    return (
       <Link to="Series">{name}</Link>
    );
}
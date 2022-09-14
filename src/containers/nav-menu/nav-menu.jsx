import { Link } from "react-router-dom";

const NavMenu = () => (
    <nav>
        <ul>
            <li>
                <Link to={'/'}>Accueil</Link>
            </li>
        </ul>
    </nav>
);

export default NavMenu;
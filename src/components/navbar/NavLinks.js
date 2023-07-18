// React
import { NavLink } from 'react-router-dom';

// Style
import '../../css/navbar.css';


export default function NavLinks() {

    return (
        <ul className="menu-nav">
            <li className="menu-nav_item">
                <NavLink to="/" className="menu-nav_link">
                    Home
                </NavLink>
            </li>
            <li className="menu-nav_item">
                <NavLink to="banking-accounts" className="menu-nav_link">
                    Banking Accounts
                </NavLink>
            </li>
            {/* <li className="menu-nav_item">
                <NavLink to="NA" className="menu-nav_link">
                    NA
                </NavLink>
            </li>
            <li className="menu-nav_item">
                <NavLink to="loading" className="menu-nav_link">
                    NA
                </NavLink>
            </li> */}
            <li className="menu-nav_item">
                <NavLink to="blog" className="menu-nav_link">
                    Blog
                </NavLink>
            </li>
        </ul>
    );
}



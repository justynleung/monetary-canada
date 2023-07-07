// React
import { NavLink } from 'react-router-dom';

// Style
import '../../css/navbar.css';

import logo from '../../asset/images/dark-logo-no-bg.png';

export default function NavLogo() {

    return (
        <div className="logo-wrapper">
            <NavLink to="/"><img src={logo} alt="Monetary Canada Logo" className="logo" /></NavLink>
        </div>
    )
}
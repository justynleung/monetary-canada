import '../../css/navbar.css';

import logo from '../images/logo-no-background.png';

export default function NavLogo() {
    
    return (
        <div className="logo-wraper">
            <a href="index.html"><img src={logo} alt="Monetary Canada Logo" className="logo"/></a>
        </div>
    )
}
import '../../css/navbar.css';

import logo from '../../asset/images/light-logo-no-bg.png';

export default function NavLogo() {
    
    return (
        <div className="logo-wraper">
            <a href="index.html"><img src={logo} alt="Monetary Canada Logo" className="logo"/></a>
        </div>
    )
}
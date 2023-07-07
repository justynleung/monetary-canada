// React
import { useMediaQuery } from "react-responsive";

// Components
import NavLinks from "./NavLinks";
import NavLogo from './NavLogo';
import MobileNav from './MobileNav';

// Style
import '../../css/navbar.css';

// Asset
import { DeviceSize } from '../../asset/data/DeviceSize';


export default function Navbar() {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

    return (
        <header>
            <div className={`nav ${isMobile ? "mobile" : ""}`}>
                {!isMobile && <NavLogo />}
                {!isMobile && <NavLinks />}
            </div>
            {isMobile && <MobileNav />}
        </header>
    );
}

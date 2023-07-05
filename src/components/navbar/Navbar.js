// React
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";

// Components
import NavLinks from "./NavLinks";
import NavLogo from './NavLogo';
import MobileNav from './MobileNav';

// Style
import '../../css/navbar.css';

// Asset
import { DeviceSize } from '../responsive/DeviceSize';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile})

    return (
        <header>
            <div className="nav">
                {!isMobile && <NavLogo />}
                {!isMobile && <NavLinks />}
            </div>
            {isMobile && <MobileNav />}
        </header>
    );
}

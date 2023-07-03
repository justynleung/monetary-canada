import { useState } from 'react';
import { useMediaQuery } from "react-responsive";

import NavLink from "./NavLink";
import NavLogo from './NavLogo';
import MobileNav from './DelayedMobileNav';

import '../../css/navbar.css';
import { DeviceSize } from '../responsive/index';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile})

    return (
        <header>
            <div className="nav">
                {!isMobile && <NavLogo />}
                {!isMobile && <NavLink />}
            </div>
            {isMobile && <MobileNav isOpen = {isOpen} toggle = {() => setIsOpen(!isOpen)}/>}
        </header>
    );
}

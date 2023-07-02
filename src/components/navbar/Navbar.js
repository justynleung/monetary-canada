import { useState } from 'react';
import { useMediaQuery } from "react-responsive";

import NavLink from "./NavLink";
import MenuBtn from './MenuBtn';
import NavLogo from './NavLogo';
import MobileNavLink from './MobileNavLink';

import '../../css/navbar.css';
import { DeviceSize } from '../responsive/index';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile})

    return (
        <header>
            <div className="nav">
                {!isMobile && <NavLogo />}
                {isMobile && <MenuBtn isOpen = {isOpen} toggle = {() => setIsOpen(!isOpen)} />}
                {!isMobile && <NavLink />}
            </div>
            {isMobile && isOpen && <MobileNavLink isOpen = {isOpen}/>}
        </header>
    );
}
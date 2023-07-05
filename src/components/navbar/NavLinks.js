// React
import { NavLink } from 'react-router-dom';

// Pages
import BankingAccounts from '../../pages/Banking-accounts';

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
                <NavLink to="credit-cards" className="menu-nav_link">
                    Credit Cards
                </NavLink>
            </li>
            <li className="menu-nav_item">
                <NavLink to="insurance" className="menu-nav_link">
                    Insurance
                </NavLink>
            </li>
            <li className="menu-nav_item">
                <NavLink to="blog" className="menu-nav_link">
                    Blog
                </NavLink>
            </li> */}
        </ul>
  );
}



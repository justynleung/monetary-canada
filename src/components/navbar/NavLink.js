
import '../../css/navbar.css';


export default function NavLink() {

  return (
        <ul className="menu-nav">
            <li className="menu-nav_item active">
                <a href="index.html" className="menu-nav_link">
                    Home
                </a>
            </li><li className="menu-nav_item">
                <a href="banking-accounts.html" className="menu-nav_link">
                    Banking Accounts
                </a>
            </li><li className="menu-nav_item">
                <a href="credit-cards.html" className="menu-nav_link">
                    Credit Cards
                </a>
            </li><li className="menu-nav_item">
                <a href="insurance.html" className="menu-nav_link">
                    Insurance
                </a>
            </li><li className="menu-nav_item">
                <a href="blog.html" className="menu-nav_link">
                    Blog
                </a>
            </li>
        </ul>
  );
}



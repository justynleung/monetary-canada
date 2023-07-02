import '../../css/navbar.css';

export default function MobileNavLink() {

  return (
        <div className="mobile-nav">           
            <ul className="mobile-nav">
                <li className="mobile-nav_item active">
                    <a href="index.html" className="mobile-nav_link">
                        Home
                    </a>
                </li><li className="mobile-nav_item">
                    <a href="banking-accounts.html" className="mobile-nav_link">
                        Banking Accounts
                    </a>
                </li><li className="mobile-nav_item">
                    <a href="credit-cards.html" className="mobile-nav_link">
                        Credit Cards
                    </a>
                </li><li className="mobile-nav_item">
                    <a href="insurance.html" className="mobile-nav_link">
                        Insurance
                    </a>
                </li><li className="mobile-nav_item">
                    <a href="blog.html" className="mobile-nav_link">
                        Blog
                    </a>
                </li>
            </ul>
        </div>
  );
}



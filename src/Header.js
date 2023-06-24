import './css/header.css';

export default function Header() {
  return (
    <header>
        <div class="menu-btn">
            <span class="menu-btn_burger"></span>
        </div>
        <nav class="nav">
            <div class="icon-wraper">
                <span class="icon"></span>
            </div>
            <ul class="menu-nav">
                <li class="menu-nav_item active">
                    <a href="index.html" class="menu-nav_link">
                        Home
                    </a>
                </li><li class="menu-nav_item">
                    <a href="banking-accounts.html" class="menu-nav_link">
                        Banking Accounts
                    </a>
                </li><li class="menu-nav_item">
                    <a href="credit-cards.html" class="menu-nav_link">
                        Credit Cards
                    </a>
                </li><li class="menu-nav_item">
                    <a href="insurance.html" class="menu-nav_link">
                        Insurance
                    </a>
                </li><li class="menu-nav_item">
                    <a href="blog.html" class="menu-nav_link">
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  );
}



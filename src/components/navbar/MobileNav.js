// React
import { NavLink, onClick } from 'react-router-dom';

// Hook
import { DelayedMountUnmount } from "../../hook/DelayedMountUnmount"

export default function MobileNav() {
    const [state, show, hide, hideNow] = DelayedMountUnmount(450);

    return (
        <>
            <div className="menu-btn" onClick={state === "mounted" ? hide : show}>
                <span className={state === "mounting" ? "menu-btn_burger open" :
                    state === "mounted" ? "menu-btn_burger opened" : "menu-btn_burger"}></span>
            </div>
            {state !== "unmounted" && (
                <MobileNavLink hideNow={hideNow} className={`${state === "unmounting" ? "end-animation closed" : state === "unmounted" ? "closed" : ""}`} />
            )}
        </>
    )
}

function MobileNavLink(props) {
    return (
        <div className={`mobile-nav start-animation ${props.className}`}>
            <ul className="mobile-nav">
                <li className="mobile-nav_item">
                    <NavLink to="/" className="mobile-nav_link" onClick={props.hideNow}>
                        Home
                    </NavLink>
                </li><li className="mobile-nav_item">
                    <NavLink to="banking-accounts" className="mobile-nav_link" onClick={props.hideNow}>
                        Banking Accounts
                    </NavLink>
                    {/* </li><li className="mobile-nav_item">
                <NavLink to="credit-cards" className="mobile-nav_link" onClick={}>
                    Credit Cards
                </NavLink>
            </li><li className="mobile-nav_item">
                <NavLink to="insurance" className="mobile-nav_link" onClick={}>
                    Insurance
                </NavLink>
            </li><li className="mobile-nav_item">
                <NavLink to="blog" className="mobile-nav_link" onClick={}>
                    Blog
                </NavLink> */}
                </li>
            </ul>
        </div>
    )
}





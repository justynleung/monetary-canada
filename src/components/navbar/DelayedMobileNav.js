import { useEffect, useState } from "react";

function DelayedMobileNavLink(time = 450) {
    const [state, setState] = useState("unmounted");
    const show = () => {
        if (state === "unmounting") {
            return;
        }
        setState("mounting");
    };
    const hide = () => {
        if (state === "mounting") {
            return;
        }
        setState("unmounting");
    };

    useEffect(() => {
        let timeoutId;
        if (state === "unmounting") {
            timeoutId = setTimeout(() => {
                setState("unmounted");
            }, time);
        } else if (state === "mounting") {
            timeoutId = setTimeout(() => {
                setState("mounted");
            }, time);
        }
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, [state, time]);

    return [state, show, hide];
}

export default function App(props) {
    const [state, show , hide] = DelayedMobileNavLink();

    return (
        <>
            <div className="menu-btn" onClick = {state === "mounted" ? hide : show}>
                <span className={state === "mounting" ? "menu-btn_burger open" : 
                    state ==="mounted" ? "menu-btn_burger opened" : "menu-btn_burger"}></span>
            </div>
            {state !== "unmounted" && (
                <MobileNav className={`${state === "unmounting" ? "end-animation closed" : ""}`} />
            )}
        </>
    )
}


function MobileNav(props) {
    return (
        <div className={`mobile-nav start-animation ${props.className}`}>           
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
    )
  };
  
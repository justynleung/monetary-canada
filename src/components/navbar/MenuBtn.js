import '../../css/navbar.css';

export default function menuBtn(props) {
    

    return (
        <div className="menu-btn" onClick={props.toggle}>
            <span className={props.isOpen ? "menu-btn_burger open" : "menu-btn_burger"}></span>
        </div>
    );
}
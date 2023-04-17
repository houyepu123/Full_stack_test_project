import icon from "../images/icon.png";

export default function Navbar(props) {
    return (
        <nav className='navbar-css'>
            <img src={icon} alt="icon" width="75px" height="75px"></img>
            <h3 className='navbar-font'>Weather App</h3>
        </nav>
    )
}
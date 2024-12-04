import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={"navBar"}>
            <Link to={"/"}>
                <button className={"navButton"}>home</button>
            </Link>
            <Link to={"/about"}>
                <button className={"navButton"}>About</button>
            </Link>
            <Link to={"/sell"}>
                <button className={"navButton"}>Sell Fertilizer</button>
            </Link>
            <Link to={"/fertilizer"}>
                <button className={"navButton"}>Buy Fertilizer</button>
            </Link>
            <Link to={"/user"}>
                <button className={"navButton"}>Profile</button>
            </Link>
        </nav>
    );
}

export default NavBar;
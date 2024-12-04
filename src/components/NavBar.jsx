const NavBar = () => {
    return (
        <nav className={"navBar"}>
            <a href={"/"}>
                <button className={"navButton"}>home</button>
            </a>
            <a href={"/about"}>
                <button className={"navButton"}>About</button>
            </a>
            <a href={"/sell"}>
                <button className={"navButton"}>Sell Fertilizer</button>
            </a>
            <a href={"/fertilizer"}>
                <button className={"navButton"}>Buy Fertilizer</button>
            </a>
            <a href={"/user"}>
                <button className={"navButton"}>Profile</button>
            </a>
        </nav>
    );
}

export default NavBar;
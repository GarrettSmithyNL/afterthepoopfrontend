import './NavBar.css';
import {Link} from "react-router-dom";
import {ReactComponent as ButtonBackground} from "../../../assets/button.svg";


export const NavBar = () => {
    return (
        <div className={"navBar"}>
            <Link to={"/"} className={'navButton'}>
                <ButtonBackground className={'buttonBackground'}/>
                <span className={'buttonText'}>Home</span>
            </Link>
            <Link to={"/about"} className={'navButton'}>
                <ButtonBackground className={'buttonBackground'}/>
                <span className={'buttonText'}>About</span>
            </Link>
            <Link to={"/sell"} className={'navButton'}>
                <ButtonBackground className={'buttonBackground'}/>
                <span className={'buttonText'}>Sell Fertilizer</span>
            </Link>
            <Link to={"/buy"} className={'navButton'}>
                <ButtonBackground className={'buttonBackground'}/>
                <span className={'buttonText'}>Buy Fertilizer</span>
            </Link>
            <Link to={"/user"} className={'navButton'}>
                <ButtonBackground className={'buttonBackground'}/>
                <span className={'buttonText'}>Profile</span>
            </Link>
        </div>
    );
}

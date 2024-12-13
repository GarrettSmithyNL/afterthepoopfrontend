import "./Header.css"
import {ReactComponent as HeaderLogo} from '../../../assets/header.svg';

export const Header = () => {
    return (
        <div className={"header"}>
            <HeaderLogo className={'headerPic'}/>
        </div>
    );
}

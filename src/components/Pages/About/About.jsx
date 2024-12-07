import './About.css'
import {NavBar} from "../../SubComponents/NavBar/NavBar";
import {Header} from "../../SubComponents/Header/Header";

export const About = () => {
    return (
        <div className={"aboutPage"}>
            <Header />
            <NavBar />
            <div className={'aboutBody'}>
                This is the about page
            </div>
        </div>
    )
}

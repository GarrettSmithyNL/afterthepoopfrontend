import './Sell.css';
import {NavBar} from "../../SubComponents/NavBar/NavBar";
import {Header} from "../../SubComponents/Header/Header";
import {SellPanel} from "../../SubComponents/SellPanel/SellPanel";


export const Sell = () => {
    return (
        <div className={"sellPage"}>
            <Header />
            <NavBar />
            <div
                className={'sellBody'}
                style={{
                    backgroundImage: `url(/images/backpanel.svg)`,
                    backgroundSize: '1000px'
                }}
            >
                <SellPanel />
            </div>
        </div>
    )
}

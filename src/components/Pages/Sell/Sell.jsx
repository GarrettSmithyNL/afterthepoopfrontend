import NavBar from "../../SubComponents/NavBar/NavBar";
import Header from "../../SubComponents/Header/Header";
import SellPanel from "../../SubComponents/SellPanel/SellPanel";
import './Sell.css';

const Sell = () => {
    return (
        <div className={"sellPage"}>
            <Header />
            <NavBar />
            <div className={'sellBody'}>
                <SellPanel />

            </div>
        </div>
    )
}

export default Sell;
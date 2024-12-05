import NavBar from "../../SubComponents/NavBar/NavBar";
import './Home.css'
import Header from "../../SubComponents/Header/Header";
import LoginPanel from "../../SubComponents/LoginPanel/LoginPanel";

const Home = () => {
    return(
        <div className={"homePage"}>
            <Header />
            <NavBar />
            <div className={'homeBody'}>
                <div className={'homeInfoBox'}>
                    <p>
                        Fertilizers are like food for plants, providing essential
                        nutrients for healthy growth. These nutrients, primarily
                        nitrogen, phosphorus, and potassium, are often depleted
                        from the soil through crop harvesting. Fertilizers
                        replenish these nutrients, allowing plants to thrive
                        and produce bountiful yields. They come in various
                        forms, including organic options like compost and
                        manure, as well as synthetic chemical fertilizers.
                        While synthetic fertilizers offer precise nutrient
                        delivery, organic fertilizers improve soil health
                        and structure over time. The appropriate choice of
                        fertilizer depends on factors such as soil type,
                        crop needs, and environmental considerations.
                    </p>
                </div>
                <div className={'loginBox'}>
                    <LoginPanel />
                </div>
            </div>
        </div>
    );
}

export default Home;
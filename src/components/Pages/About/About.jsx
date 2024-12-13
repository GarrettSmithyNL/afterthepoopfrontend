import './About.css'
import {NavBar} from "../../SubComponents/NavBar/NavBar";
import {Header} from "../../SubComponents/Header/Header";

export const About = () => {
    return (
        <div className={"aboutPage"}>
            <Header />
            <NavBar />
            <div
                className={'aboutBody'}
                style={{
                    backgroundImage: `url(/images/backpanel.svg)`,
                    backgroundSize: '1000px',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <h2>About Us</h2>
                <div
                    className="aboutBackgroundPic"
                    style={{
                        backgroundImage: `url(/images/largepaper.svg)`,
                        backgroundSize: '900px',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <p className={'aboutPara'}>
                        We started as a simple solution to a messy problem: pet waste
                        removal. But we saw an opportunity to turn this waste into a
                        valuable resource. Through innovative processing techniques,
                        we transformed pet waste into a nutrient-rich, eco-friendly fertilizer.
                    </p>
                    <p className={'aboutPara'}>
                        Today, we’re more than just a fertilizer producer. Our online
                        marketplace connects sustainable farmers and gardeners with
                        high-quality, eco-friendly fertilizers. Join us in our mission
                        to nourish the planet, one scoop at a time.
                    </p>
                    <p className={'aboutPara'}>
                        By choosing our products, you're not just improving your garden;
                        you're contributing to a more sustainable future. Together, we can
                        create a world where waste is transformed into wonder.
                    </p>
                </div>
            </div>
        </div>
    )
}

import "./Landing.css";
import Counter from "./Counter/Counter";
import { LandingContent } from "../../data";
import CountDown from "react-countdown";

const Landing = () => {
    return (
        <div id="section-landing">
            <div className="section-landing-content">
                <img src={LandingContent.img} alt="landingImg" className="section-landing-content-img" />
                <Counter />
                <p className="section-landing-btn-undertxt">1252/10000 minted</p>
                <div className="section-landing-countdown">
                    <CountDown className="section-landing-countdown-timer" date={LandingContent.dateEndTimer} />
                    <p className="section-landing-countdown-txt">{LandingContent.txtUnderTimer}</p>
                </div>
                
                
            </div>
        </div>
    );
}

export default Landing;
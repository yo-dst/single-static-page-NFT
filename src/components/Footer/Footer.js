import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"; 

import "./Footer.css";
import { logo, FooterContent } from "../../data";

const Footer = () => {
    const icons = [
        {
            icon: faDiscord,
            link: FooterContent.discordLink
        },
        {
            icon: faTwitter,
            link: FooterContent.twitterLink
        }
    ]

    return (
        <div className="footer">
            <div className="footer-top">
                <img src={logo} alt="logo" className="footer-top-img" />
                <div className="footer-icons-wrapper">
                    {icons.map((icon, index) => (
                        <a href={icon.link} className="footer-icon-wrapper" key={`footer-icon-${index}`}><FontAwesomeIcon icon={icon.icon} className="footer-icon" /></a>
                    ))}
                </div>
            </div>
            <div className="footer-bot">
                <p>Copyright &copy; 2021 {FooterContent.websiteName}</p>
                <div className="footer-bot-rightTxt-wrapper">
                    <p>{FooterContent.rightTxt_1}</p>
                    <p className="footer-bot-rightTxt-separator">&nbsp; &#8226; &nbsp;</p>
                    <p>{FooterContent.rightTxt_2}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;
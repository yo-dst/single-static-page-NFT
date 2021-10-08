import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faWallet } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

import "./Header.css";
import { logo } from "../../data";

const Navbar = (props) => {
    return (
        <div className="navbar">
            {props.navItems.map((item, index) => (
                <button className="navbar-item" onClick={e => {e.preventDefault(); props.navigate(item.link);}} key={`navbar-item-${index}`}>
                    {item.name}
                    <div className="navbar-item-underline"></div>
                </button>
            ))}    
        </div>
    );
}

const Header = (props) => {
    useEffect(() => {
        if (props.show)
            $('body').addClass('stop-scrolling');
        else
            $('body').removeClass('stop-scrolling');
    }, [props.show]);

    return (
        <div className="header-wrapper">
            <div className="header">
                <button className="toggle-btn" onClick={e => props.setShow(!props.show)}>
                    <FontAwesomeIcon icon={props.show ? faTimes : faBars} style={{fontSize: "2.5rem", color: "#202020"}} />
                </button>
                <img src={logo} alt="logo" className="logo" height="100%" />
                <Navbar navItems={props.navItems} navigate={props.navigate} />
                <button className="btn-connect" onClick={e => console.log("Connect")}>CONNECT</button>
                <button className="btn-connect-mobile" onClick={e => console.log("Connect")}>
                    <FontAwesomeIcon icon={faWallet} style={{fontSize: "2.5rem", color: "#353BED"}} />
                </button>
            </div>
        </div>
        
    );
}

export default Header;
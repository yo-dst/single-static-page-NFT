import { useEffect } from "react";
import $ from "jquery";

import "./NavbarMobile.css";

const NavbarMobile = (props) => {
    useEffect(() => {
        if ($(window).scrollTop() === 0)
        {
            $(".navbar-mobile").css("top", "0px");
            $(".navbar-mobile").css("padding-top", "80px");
        }     
    }, [props.show]);

    if (!props.show)
        return (null);
    else {
        
        return (
            <div className="navbar-mobile" onClick={e => props.setShow(false)}>
                {props.navItems.map(item => (
                    <button className="navbar-mobile-item" key={item.name} onClick={e => {e.preventDefault(); props.navigate(item.link);}} >{item.name}</button>
                ))}
            </div>
        );
    }
}

export default NavbarMobile;
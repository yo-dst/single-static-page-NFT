import { useState, useEffect } from 'react';
import $ from "jquery";

import './App.css';
import { navItems } from "./data";
import { GalleryContent } from "./data";
import Header from "./components/Header/Header";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import Footer from "./components/Footer/Footer";
import Landing from './components/Landing/Landing';
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Roadmap from './components/Roadmap/Roadmap';
import FAQ from "./components/FAQ/FAQ";
import Gallery from './components/Gallery/Gallery';

const App = () => {
    const [show, setShow] = useState(false);

    const navigate = (id) => {
        let x = $(id).offset().top;
        window.scrollTo(0, x - 100);
    }

    useEffect(() => {
        window.onscroll = () => {
            if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                $(window).width() < 991 ? $(".header-wrapper").css("background-color", "rgba(0, 0, 0, 0.4)") : $(".header-wrapper").css("background-color", "rgba(255, 255, 255, 1)");
            } else {
                $(".header-wrapper").css("background-color", "rgba(0, 0, 0, 0)");
            }
        }
    }, []);

    return (
        <div className="app">
            <Header show={show} setShow={setShow} navItems={navItems} navigate={navigate} />
            <NavbarMobile show={show} setShow={setShow} navItems={navItems} navigate={navigate} />
            <Landing />
            <About navigate={navigate} />
            <Gallery imgBank={GalleryContent.imgs} nbImgs={window.screen.width > 767 ? GalleryContent.nbImgsDesktop : GalleryContent.nbImgsMobile} freq={GalleryContent.frequenceSwitch} />
            <Team />
            <Roadmap />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;

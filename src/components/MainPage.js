import React from "react";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import Header from "./Header";
import Products from "./Products";
import Sustained from "./Sustained";
import Video from "./Video";
import Footer from "./Footer";
import Cominication from "./Cominication";
import HamburgerMenu from "./HamburgerMenu";
import SSS from "./SSS/SSS";

function MainPage() {
    return (
        <div className="bg-about">
            <HamburgerMenu />
            <Header />
            <AboutUs />
            <Sustained />
            <Products />
            <Blog />
            <SSS />
            <Cominication />
            <Footer />
        </div>
    );
}

export default MainPage;

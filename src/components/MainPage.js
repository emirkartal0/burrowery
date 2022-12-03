import React from "react";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import Header from "./Header";
import Products from "./Products";
import Sustained from "./Sustained";
import Video from "./Video";
import Footer from "./Footer";
import SSS from "./SSS";
import Cominication from "./Cominication";

function MainPage() {
    return (
        <>
            <Header />
            <AboutUs />
            <Video />
            <Sustained />
            <Products />
            <Blog />
            <SSS />
            <Cominication />
            <Footer />
        </>
    );
}

export default MainPage;

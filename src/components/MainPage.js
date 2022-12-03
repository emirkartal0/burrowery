import React from "react";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import Header from "./Header";
import Products from "./Products";
import Sustained from "./Sustained";
import Video from "./Video";
import Footer from "./Footer";

function MainPage() {
    return (
        <>
            <Header />
            <AboutUs />
            <Video />
            <Sustained />
            <Products />
            <Blog />
            <Footer />
        </>
    );
}

export default MainPage;

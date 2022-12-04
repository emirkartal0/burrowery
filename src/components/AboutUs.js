import React from 'react';
import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <div id='about'>
            <div className="flex flex-col justify-center items-center p-10 bg-about w-full h-3/4">
                <h3 className=" text-koyu text-4xl font-serif font-extralight mt-8">
                    Hakkımızda
                </h3>
                <p className="mt-4 text-center text-koyu">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                    dolore eaque molestiae iusto consequatur a quisquam harum
                    incidunt facere magnam perferendis expedita et, sit mollitia
                    animi voluptatibus libero sint quas!Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Id dolore eaque
                    molestiae iusto consequatur a quisquam harum incidunt facere
                    magnam perferendis expedita et, sit mollitia animi
                    voluptatibus libero sint quas!Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Id dolore eaque molestiae
                    iusto consequatur a quisquam harum incidunt facere magnam
                    perferendis expedita et, sit mollitia animi voluptatibus
                    libero sint quas!Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Id dolore eaque molestiae iusto
                    consequatur a quisquam harum incidunt facere magnam
                    perferendis expedita et, sit mollitia animi voluptatibus
                    libero sint quas!Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Id dolore eaque molestiae iusto
                    consequatur a quisquam harum incidunt facere magnam
                    perferendis expedita et, sit mollitia animi voluptatibus
                    libero sint quas!
                </p>
                <Link
                    className=" focus:outline-none cursor-pointer text-white bg-green bg-koyu focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-7"
                    to='hakkımızda'>
                    Daha fazla bilgi 
                </Link>
            </div>
        </div>
    );
}

export default AboutUs;

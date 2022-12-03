import React from 'react'
import { useEffect, useState } from 'react';


function Video() {
    const [windowSize, setWindowSize] = useState();

    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className=''>
            <iframe width={windowSize?.innerWidth} height={windowSize?.innerHeight} src="https://www.youtube.com/embed/j7rUThNFB6A?start=8" title="YouTube video player" frameBorder="0" allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Video
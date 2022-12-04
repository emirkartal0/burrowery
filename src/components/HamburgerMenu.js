import React, { useState } from 'react'

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const handleChangeIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='fixed top-12 left-8 shadow-lg rounded-lg'>
            <div className=''>
                <div className={`flex bg-about rounded-lg shadow-md px-4 py-2 ${isOpen ? "" : "hidden"}`}>
                    <div className='flex flex-col ml-7 pl-1 gap-2 border-l'>
                        <button className='px-4 py-1 rounded-lg font-normal hover:text-about hover:bg-koyu duration-300 transition-all'>HAKKIMIZDA</button>
                        <button className='px-4 py-1 rounded-lg hover:text-about hover:bg-koyu duration-300 transition-all'>SÜRDÜRÜLEBİLİRLİK</button>
                        <button className='px-4 py-1 rounded-lg hover:text-about hover:bg-koyu duration-300 transition-all'>ÜRÜNLER</button>
                        <button className='px-4 py-1 rounded-lg hover:text-about hover:bg-koyu duration-300 transition-all'>BLOG</button>
                        <button className='px-4 py-1 rounded-lg hover:text-about hover:bg-koyu duration-300 transition-all'>S.S.S</button>
                        <button className='px-4 py-1 rounded-lg hover:text-about hover:bg-koyu duration-300 transition-all'>İLETİŞİM</button>
                    </div>
                </div>
                <button onClick={handleChangeIsOpen} className="fixed top-14 left-10  rounded-lg"><img src={`${isOpen ? "/images/close-24.png" : "/images/ham-menu-24.svg"}`}></img></button>
            </div>
        </div>
    )
}

export default HamburgerMenu
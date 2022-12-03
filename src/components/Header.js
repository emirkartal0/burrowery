import React from 'react'

function Header() {
    return (
        <div className='w-full h-full'>
            <img src="/images/header.svg" alt="header" />
            <div className='flex justify-center items-center relative'>
                <img className='w-10 absolute bottom sm:w-10 md:w-20' src="/images/logo1.png" alt="logo" />
                <img className='w-3 absolute bottom sm:w-3 md:w-5' src="/images/Group.png" alt="logo" />
            </div>
        </div>
    )
}

export default Header
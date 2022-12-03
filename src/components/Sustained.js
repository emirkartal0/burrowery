import React from 'react'
import { Link } from 'react-router-dom'

function Sustained() {
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col items-center bg-about p-16'>
                <div className='flex flex-row justify-around'>
                    <div className='w-1/3 flex flex-col items-center mt-8 p-5'>
                        <h3 className='text-koyu text-4xl font-serif'>Sürdürülebilir</h3>
                        <h4 className='text-center mt-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum adipisci necessitatibus consequatur itaque cum obcaecati.</h4>
                        <img className='mt-8' src='/images/surdur.png' alt="img" />
                    </div>
                    <div className='w-1/3 flex flex-col items-center mt-8 p-5 ml-10'>
                        <h3 className='text-koyu text-4xl font-serif'>Sürdürülebilir</h3>
                        <h4 className='text-center mt-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum adipisci necessitatibus consequatur itaque cum obcaecati.</h4>
                        <img className='mt-8' src='/images/surdur.png' alt="img" />
                    </div>
                    <div className='w-1/3 flex flex-col items-center mt-8 p-5 ml-10 '>
                        <h3 className='text-koyu text-4xl font-serif'>Sürdürülebilir</h3>
                        <h4 className='text-center mt-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum adipisci necessitatibus consequatur itaque cum obcaecati.</h4>
                        <img className='mt-8' src='/images/surdur.png' alt="img" />
                    </div>
                </div>
                <Link
                    className="focus:outline-none cursor-pointer text-white bg-green bg-koyu focus:ring-4 focus:ring-green-300 font-medium rounded-lg mt-3 text-sm px-5 py-2.5 mr-2 my-3"
                    to='surdurulebilir'>
                    Daha fazla bilgi için
                </Link>
            </div>
            <div className='flex justify-center items-center relative'>
                <img className='w-10 absolute bottom sm:w-10 md:w-20' src="/images/logo2.png" alt="logo" />
                <img className='w-3 absolute bottom sm:w-3 md:w-5' src="/images/Group2.png" alt="logo" />
            </div>
        </div>

    )
}

export default Sustained
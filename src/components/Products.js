import React from 'react'

function Products() {
    return (
        <div className='w-full h-full bg-acik'>
            <div className='flex flex-row justify-center p-10'>
                <img className='w-1/4' src="/images/prod.png" alt="product" />
                <img className='w-1/4' src="/images/prod.png" alt="product" />
                <img className='w-1/4' src="/images/prod.png" alt="product" />
                <img className='w-1/4' src="/images/prod.png" alt="product" />
            </div>
            <div className='flex justify-center items-center relative'>
                <img className='w-10 absolute bottom sm:w-10 md:w-20' src="/images/logo1.png" alt="logo" />
                <img className='w-3 absolute bottom sm:w-3 md:w-5' src="/images/Group.png" alt="logo" />
            </div>
            <div className='flex flex-col'>
                <h2 className=' font-light font-mono text-5xl bg-about flex justify-center items-center pt-20'>Ürünler</h2>
                <div className='flex flex-wrap bg-about'>
                    <img src='/images/product.png' alt="prod" />
                    <img src='/images/product.png' alt="prod" />
                    <img src='/images/product.png' alt="prod" />
                    <img src='/images/product.png' alt="prod" />
                    <img src='/images/product.png' alt="prod" />
                    <img src='/images/product.png' alt="prod" />
                    <img src='/images/product.png' alt="prod" />
                    <img src='/images/product.png' alt="prod" />
                </div>
            </div>
        </div>

    )
}

export default Products
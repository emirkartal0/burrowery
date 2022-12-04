import React from 'react'

function Product({ product }) {
    return (
        <div className='h-full rounded-lg'>
            <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 h-full justify-items-center -translate-x-6 md:-translate-x-0'>
                <img src='/images/product.png'></img>
                <div className=' flex flex-col px-3 place-content-center justify-items-center justify-center text-sm'>
                    <div className='border-b py-1 mb-1'>
                        <p className='w-2/3 text-4xl font-semibold'>{product?.title}</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <p className='font-semibold'>Çekirdek Tipi:</p>
                        <p className=''>{product?.type}</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <p className='font-semibold'>Gövde:</p>
                        <p className=''>{product?.body}</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <p className='font-semibold'>Asidite:</p>
                        <p className=''>{product?.acidity}</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <p className='font-semibold'>İçim:</p>
                        <p className=''>{product?.taste}</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <p className='font-semibold'>İşleme Süreci:</p>
                        <p className=''>{product?.process}</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <p className='font-semibold'>Nasıl Demlenmeli:</p>
                        <p className=''>{product?.steep}</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <p className='font-semibold'>Hazırlanma Önerisi:</p>
                        <p className=''>{product?.preparing}</p>
                    </div>
                    <div className='w-full flex justify-end mt-2'>
                        <button className='rounded-md px-3 py-1.5 bg-koyu text-about'>Sepete Ekle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
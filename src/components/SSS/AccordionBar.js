import React from 'react'

function AccordionBar({ openAccordion, setOpenAccordion, accordion, index }) {

    const handleSetOpen = () => {
        if (openAccordion == index) {
            setOpenAccordion(null)
        } else {
            setOpenAccordion(index)
        }
    }

    return (
        <div className='w-10/12 px-3 pt-2 flex flex-col content-center mb-2'>
            <div className='flex w-full items-center flex-row gap-5 pb-4 border-b '>
                <button onClick={handleSetOpen} className='p-1 hover:bg-[#efdec8] rounded-lg outline-none'>
                    <img src={`${openAccordion == index ? "images/up-chevron.png":"images/down-chevron.png"}`} className='w-4 h-4 opacity-80'></img>
                </button>
                <div className='w-full'>
                    <div className='flex w-full items-center font-semibold pt-1'>{accordion?.title}</div>
                    <div className={`py-0.5 ${index === openAccordion ? "" : "hidden"}`}>
                        {
                            accordion.content
                        }
                    </div>
                </div>

            </div>



        </div>
    )
}

export default AccordionBar
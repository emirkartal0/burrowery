import React from "react";

function SustainedPage() {
    return (
        <div className="flex flex-col bg-about">
            <div className="relative">
                <h2 className="absolute left-[24%] top-1/3 font-serif flex justify-center p-2 pt-12 text-white text-8xl">Sürdürülebilirlik</h2>
                <img src="/images/surdurPage.png" alt="" />
            </div>
            <div className='flex justify-center items-center relative'>
                <img className="absolute bottom w-20" src="/images/1.png" alt="" />
            </div>
            <div className="flex flex-col gap-10 p-12 pt-20">
                <div className="flex justify-center items-center gap-10">
                    <img className="w-40 h-40" src="/images/surdur.png" alt="" />
                    <p className="p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, nostrum eos cum nesciunt sunt doloremque illo rem temporibus quasi perspiciatis ipsam amet ad tempora qui alias vel ex architecto!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, nostrum eos cum nesciunt sunt doloremque illo rem temporibus quasi perspiciatis ipsam amet ad tempora qui alias vel ex architecto!</p>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <p className="p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, nostrum eos cum nesciunt sunt doloremque illo rem temporibus quasi perspiciatis ipsam amet ad tempora qui alias vel ex architecto!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, nostrum eos cum nesciunt sunt doloremque illo rem temporibus quasi perspiciatis ipsam amet ad tempora qui alias vel ex architecto!</p>
                    <img className="w-40 h-40" src="/images/surdur.png" alt="" />
                </div>
                <div className="flex justify-center items-center gap-10">
                    <img className="w-40 h-40" src="/images/surdur.png" alt="" />
                    <p className="p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, nostrum eos cum nesciunt sunt doloremque illo rem temporibus quasi perspiciatis ipsam amet ad tempora qui alias vel ex architecto!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, nostrum eos cum nesciunt sunt doloremque illo rem temporibus quasi perspiciatis ipsam amet ad tempora qui alias vel ex architecto!</p>
                </div>
            </div>
        </div>
    );
}

export default SustainedPage;

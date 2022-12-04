import React from "react";
import { useState } from "react";

function Cominication() {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        eposta: "",
        phoneNumber: "",
        city: "",
        phone2Number: "",
    });

    const sendForm = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return (
        <div id="cominication" className="mt-20 px-20 pb-10 bg-about">
            <h3 className="text-4xl font-light">İletişim / Sipariş Formu</h3>
            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut reiciendis minima ipsam sunt nobis repellendus. Quisquam odit similique sapiente reiciendis molestiae, odio possimus doloremque molestias excepturi incidunt atque ipsum!, odio possimus doloremque molestias excepturi incidunt atque ipsum!</p>
            <form onSubmit={sendForm} action="" className="flex flex-col gap-3 mt-3 px-4">
                <div className="flex items-center justify-center gap-5">
                    <input onChange={(e) => setData({ ...data, firstName: e.target.value })} placeholder="Ad" className="w-1/2 border border-acik bg-about outline-none py-2 px-3 rounded-2xl" />
                    <input onChange={(e) => setData({ ...data, lastName: e.target.value })} placeholder="Soyad" className="w-1/2 border border-acik bg-about outline-none py-2 px-3 rounded-2xl" />
                </div>
                <div className="flex items-center justify-center gap-5">
                    <input onChange={(e) => setData({ ...data, eposta: e.target.value })} type="email" placeholder="Eposta" className="w-1/2 border border-acik bg-about outline-none py-2 px-3 rounded-2xl" />
                    <input onChange={(e) => setData({ ...data, phoneNumber: e.target.value })} placeholder="Telefon" className="w-1/2 border border-acik bg-about outline-none py-2 px-3 rounded-2xl" />
                </div>
                <div className="flex items-center justify-center gap-5">
                    <input onChange={(e) => setData({ ...data, city: e.target.value })} placeholder="Bulunduğunuz İl" className="w-1/2 border border-acik bg-about outline-none py-2 px-3 rounded-2xl" />
                    <input onChange={(e) => setData({ ...data, phone2Number: e.target.value })} placeholder="Telefon2" className="w-1/2 border border-acik bg-about outline-none py-2 px-3 rounded-2xl" />
                </div>
                <div className="flex items-center justify-center">
                    <textarea placeholder="Mesaj" className="flex  p-5 w-full bg-about outline-none border border-acik rounded-xl" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className="bg-koyu text-acik rounded-xl w-1/2 p-2 pl-6 font-light text-left">Formu Gönder</button>
            </form>

        </div>
    );
}

export default Cominication;

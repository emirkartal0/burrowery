import React from "react";
import Product from "../components/Product";

function ProductsPage() {
    const products = [
        {
            title: "ethiopia hiwoté buna",
            type: "Arabica",
            body: "Yüksek",
            acidity: "Orta",
            taste: "Orta-Sert",
            process: "Yıkanmış",
            steep: "Filtre Kahve Makineleri, French Press, Hario, Chemex, Mokapot, Espresso, Aero Press, Syphon",
            preparing: "Filtre kahvelerimizin tek kişilik kullanımı 7-9 gr yani bir kahve kaşığına denk gelmektedir."
        },
        {
            title: "ethiopia hiwoté buna",
            type: "Arabica",
            body: "Yüksek",
            acidity: "Orta",
            taste: "Orta-Sert",
            process: "Yıkanmış",
            steep: "Filtre Kahve Makineleri, French Press, Hario, Chemex, Mokapot, Espresso, Aero Press, Syphon",
            preparing: "Filtre kahvelerimizin tek kişilik kullanımı 7-9 gr yani bir kahve kaşığına denk gelmektedir."
        },
        {
            title: "ethiopia hiwoté buna",
            type: "Arabica",
            body: "Yüksek",
            acidity: "Orta",
            taste: "Orta-Sert",
            process: "Yıkanmış",
            steep: "Filtre Kahve Makineleri, French Press, Hario, Chemex, Mokapot, Espresso, Aero Press, Syphon",
            preparing: "Filtre kahvelerimizin tek kişilik kullanımı 7-9 gr yani bir kahve kaşığına denk gelmektedir."
        },
        {
            title: "ethiopia hiwoté buna",
            type: "Arabica",
            body: "Yüksek",
            acidity: "Orta",
            taste: "Orta-Sert",
            process: "Yıkanmış",
            steep: "Filtre Kahve Makineleri, French Press, Hario, Chemex, Mokapot, Espresso, Aero Press, Syphon",
            preparing: "Filtre kahvelerimizin tek kişilik kullanımı 7-9 gr yani bir kahve kaşığına denk gelmektedir."
        },
        {
            title: "ethiopia hiwoté buna",
            type: "Arabica",
            body: "Yüksek",
            acidity: "Orta",
            taste: "Orta-Sert",
            process: "Yıkanmış",
            steep: "Filtre Kahve Makineleri, French Press, Hario, Chemex, Mokapot, Espresso, Aero Press, Syphon",
            preparing: "Filtre kahvelerimizin tek kişilik kullanımı 7-9 gr yani bir kahve kaşığına denk gelmektedir."
        },
        {
            title: "ethiopia hiwoté buna",
            type: "Arabica",
            body: "Yüksek",
            acidity: "Orta",
            taste: "Orta-Sert",
            process: "Yıkanmış",
            steep: "Filtre Kahve Makineleri, French Press, Hario, Chemex, Mokapot, Espresso, Aero Press, Syphon",
            preparing: "Filtre kahvelerimizin tek kişilik kullanımı 7-9 gr yani bir kahve kaşığına denk gelmektedir."
        },
        {
            title: "ethiopia hiwoté buna",
            type: "Arabica",
            body: "Yüksek",
            acidity: "Orta",
            taste: "Orta-Sert",
            process: "Yıkanmış",
            steep: "Filtre Kahve Makineleri, French Press, Hario, Chemex, Mokapot, Espresso, Aero Press, Syphon",
            preparing: "Filtre kahvelerimizin tek kişilik kullanımı 7-9 gr yani bir kahve kaşığına denk gelmektedir."
        },
        {
            title: "ethiopia hiwoté buna",
            type: "Arabica",
            body: "Yüksek",
            acidity: "Orta",
            taste: "Orta-Sert",
            process: "Yıkanmış",
            steep: "Filtre Kahve Makineleri, French Press, Hario, Chemex, Mokapot, Espresso, Aero Press, Syphon",
            preparing: "Filtre kahvelerimizin tek kişilik kullanımı 7-9 gr yani bir kahve kaşığına denk gelmektedir."
        },
    ]

    return (
        <div>
            <div className="w-full flex justify-center bg-about ">
                <img src="/images/products-background.png" alt="products background image"></img>
                <img className="absolute bottom-0" src="/images/1.png" alt="logo-1"></img>
            </div>
            <div className="grid grid-cols-2 p-5 gap-2 sm:grid-cols-1 mt-20 justify-items-center bg-about">
                {
                    products.map((product, index) => (
                        <Product product={product} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export default ProductsPage;

import React, { useState } from "react";
import background from ".//sss-background.png";
import AccordionBar from "./AccordionBar";

function SSS() {
    const [openAccordion, setOpenAccordion] = useState()

    const accordions = [
        {
            title: "Discovered the undoubtable source",
            content: "pden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem I"
        },
        {
            title: "Cites of the word in classical literature",
            content: "pden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem I"
        },
        {
            title: "Looked up one of the more obscure Latin words",
            content: "pden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem I"
        },
        {
            title: "College in Virginia",
            content: "pden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem I"
        },
    ]


    return (
        <div className="w-full flex flex-col items-center bg-about">
            <div className="">
                <img src={background} alt="S.S.S. "></img>
            </div>
            <div className="bg-about w-full flex flex-col items-center mt-5">
                {
                    accordions.map((accordion, index) => (
                        <AccordionBar openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} accordion={accordion} key={index} index={index} />
                    )
                    )
                }
            </div>
        </div>
    );
}

export default SSS;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./FAQ.css";
import { FAQContent } from "../../data";

const AccordionItem = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <div className={`accordion-item-outer ${isOpen ? "accordion-item-outer-close" : "accordion-item-outer-open"}`} onClick={e => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} style={{fontSize: "1.5em"}} color={isOpen ? "#d82929" : "#009E12"} />
                <div className="accordion-item-outer-txt">{item.question}</div>
            </div>
            {isOpen ? 
                <div className="accordion-item-inner">
                    <div className="accordion-item-inner-bar"></div>
                    <div className="accordion-item-inner-txt">{item.answer}</div>
                </div>
                :
                null
            }
        </div>
    );
}

const Accordion = ({items}) => {
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem item={item} key={`accordion-item-${index}`} /> 
            ))}
        </div>
    )
}

const FAQ = () => {
    return (
        <div id="section-faq">
            <img src={FAQContent.img} alt="unkown" className="faq-img" />
            <div className="faq-content">
                <h1 className="accordion-title">FAQ</h1>
                <Accordion items={FAQContent.list} />
            </div>
        </div>
    );
}

export default FAQ;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(1);

    const subtract = (event) => {
        if (count > 1)
            setCount(count - 1);
    }

    const add = (event) => {
        if (count < 4000)
            setCount(count + 1);
    }

    const calcPrice = (count) => {
        let price = 0.327;

        price = count * price * 1000;
        price = Math.trunc(price);
        price = price / 1000;
        return (price);
    }

    return (
        <div className="counter">
            <button className="counter-subtract" onClick={subtract}>
                <div className="counter-subtract-icon-wrapper">
                    <FontAwesomeIcon icon={faMinus} className="counter-subtract-icon" color="white" />
                </div>
            </button>
            <button className="counter-middle" onClick={e => console.log("mint function")}>
                <div className="counter-middle-txt">Mint {count}</div>
                <div className="counter-middle-price">( {calcPrice(count)} eth )</div>
            </button>
            <button className="counter-add" onClick={add}>
                <div className="counter-add-icon-wrapper">
                    <FontAwesomeIcon icon={faPlus} className="counter-add-icon" color="white" />
                </div>
            </button>
        </div>
    );
}

export default Counter;
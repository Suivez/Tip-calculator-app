import './Card.css';
import logo from "../images/logo.svg";
import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";
import { useState, useRef } from "react";

function Card() {

    const [errorInput, setErrorInput] = useState("");
    const [isActiveError, setIsActivError] = useState(false);
    const inputRefBill = useRef(null);
    const inputRefPercent = useRef(null);
    const inputRefPeople = useRef("");

    const submitSplitter = (e) => {
        e.preventDefault();

        if(inputRefPeople.current.value == null) {
            setErrorInput("Can't be zero");
            setIsActivError(true);
        }
    }

    const inputField = (icon, inputRef, asd) => {
        const inputStyle = {
            background: `url(${icon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "14px 50%"
        }
        
        return (
            <div>
                <input placeholder="0" style={{borderColor: isActiveError ? "red" : "", inputStyle}} ref={{inputRef}}></input>
            </div>
        );
    }

    const button = (value) => {
        return (
            <div>
                <button value={value} onClick={e => submitSplitter(e, value)}>{value}%</button>
            </div>
        );
    }

    return (
        <div className="card-main">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="card-content">
                <div className="card-left">
                    <h5>Bill</h5>
                    {inputField(iconDollar, inputRefBill, false)}
                    <h5>Select Tip %</h5>
                    <div className="button-box">
                        {button(5)}
                        {button(10)}
                        {button(15)}
                        {button(25)}
                        {button(50)}
                        <input type="text" ref={inputRefPercent} className="input-custom" placeholder="Custom"></input>
                    </div>
                    <div className="input-label">
                        <h5>Number of People</h5>
                        <p>{errorInput}</p>
                    </div>
                    {inputField(iconPerson, inputRefPeople, true)}
                </div>
                <div className="card-right">
                    <div className="asd">
                    <div className="box-result">
                        <div>
                            <h5>Tip Amount</h5>
                            <p>/ person</p>
                        </div>
                        <div>
                            <h1>$0.00</h1>
                        </div>
                    </div>
                    <div className="box-result">
                        <div>
                            <h5>Total</h5>
                            <p>/ person</p>
                        </div>
                        <div>
                            <h1>$0.00</h1>
                        </div>
                    </div>
                    </div>
                    <button className="btn-reset">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Card;

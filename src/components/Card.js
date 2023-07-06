import './Card.css';
import logo from "../images/logo.svg";
import { useState, useRef } from "react";

function Card() {

    const [errorInput, setErrorInput] = useState("");
    const [isActiveError, setIsActivError] = useState(false);
    const [tipAmount, setTipAmount] = useState("0.00");
    const [totalAmount, setTotalAmount] = useState("0.00");
    const [isActiveReset, setIsActiveReset] = useState(false);
    const inputRefBill = useRef("");
    const inputRefPercent = useRef(null);
    const inputRefPeople = useRef("");
    const inputCustomPercent = useRef(null);

    const submitSplitter = (e) => {
        e.preventDefault();

        const countTipAmount = () => {
            let tipPrice = 0;
            if(inputCustomPercent >= 0) {
                tipPrice = parseFloat(inputRefBill.current.value, 10) * (parseFloat(inputCustomPercent, 10) / 100) / parseFloat(inputRefPeople.current.value, 10);
            }
            tipPrice = parseFloat(inputRefBill.current.value, 10) * (parseFloat(e.target.value, 10) / 100) / parseFloat(inputRefPeople.current.value, 10);
            return tipPrice.toFixed(2);
        }
        
        const countTotalAmount = () => {
            let totalAmount = 0;
            totalAmount = (parseFloat(inputRefBill.current.value, 10) / parseFloat(inputRefPeople.current.value, 10)) + parseFloat(countTipAmount(), 10);
            return totalAmount.toFixed(2);
        }
        
        if(inputRefPeople.current.value == "") {
            console.log("ASDASDASD");
            setErrorInput("Can't be zero");
            setIsActivError(true);
            setIsActiveReset(false);
        }
        else if(inputRefBill.current.value == "") {
            setTipAmount("0.00");
            setTotalAmount("0.00");
            setErrorInput("");
            setIsActiveReset(false);
        }
        else {
            setErrorInput("");
            setIsActivError(false);
            setTipAmount(countTipAmount());
            setTotalAmount(countTotalAmount());
            setIsActiveReset(true);
        }
    }

    const resetTipAmounts = () => {
        setTipAmount("0.00");
        setTotalAmount("0.00");
        setIsActiveReset(false);
        inputRefBill.current.value = 0;
        inputRefPeople.current.value = 0;
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
                    <input className="input-bill" placeholder="0" ref={inputRefBill}></input>
                    <h5>Select Tip %</h5>
                    <div className="button-box">
                        {button(5)}
                        {button(10)}
                        {button(15)}
                        {button(25)}
                        {button(50)}
                        <input type="text" ref={inputRefPercent} onChange={e => submitSplitter(e)} className="input-custom" placeholder="Custom"></input>
                    </div>
                    <div className="input-label">
                        <h5>Number of People</h5>
                        <p>{errorInput}</p>
                    </div>
                    <input className="input-people" placeholder="0" style={{borderColor: isActiveError ? "hsl(0, 100%, 68%)" : ""}} ref={inputRefPeople}></input>
                </div>
                <div className="card-right">
                    <div className="asd">
                    <div className="box-result">
                        <div>
                            <h5>Tip Amount</h5>
                            <p>/ person</p>
                        </div>
                        <div>
                            <h1>${tipAmount}</h1>
                        </div>
                    </div>
                    <div className="box-result">
                        <div>
                            <h5>Total</h5>
                            <p>/ person</p>
                        </div>
                        <div>
                            <h1>${totalAmount}</h1>
                        </div>
                    </div>
                    </div>
                    <button className={`${isActiveReset ? "btn-reset-enable" : "btn-reset-disable"}`} onClick={resetTipAmounts}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Card;

import './Card.css';
import logo from "../images/logo.svg";
import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";

function Card() {

    const inputField = (icon) => {
        const inputStyle = {
            background: `url(${icon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "14px 50%"
        }
        
        return (
            <div>
                <input placeholder="0" style={inputStyle}></input>
            </div>
        );
    }

    const button = (value) => {
        return (
            <div>
                <button>{value}%</button>
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
                    {inputField(iconDollar)}
                    <h5>Select Tip %</h5>
                    <div className="button-box">
                        {button(5)}
                        {button(10)}
                        {button(15)}
                        {button(25)}
                        {button(50)}
                        <input type="text" className="input-custom" placeholder="Custom"></input>
                    </div>
                    <h5>Number of People</h5>
                    {inputField(iconPerson)}
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

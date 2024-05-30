import React, { useState } from 'react'
import './tip-calculator.css'

const TipCalculator = () => {

    const [billAmount, setBillAmount] = useState(null);
    const [tipPercentage, setTipPercentage] = useState(10);
    const [splitCount, setSplitCount] = useState(1);
    const [tipAmount, setTipAmount] = useState(null);
    const [error, setError] = useState("")

    function handleCalculateTip() {
        if (!billAmount || billAmount <= 0 || !tipPercentage || tipPercentage <= 0) {
            setTipAmount("");
            setError("Please Enter valid values for bill amount and tip percentage");
            return;
        }

        const bill = parseFloat(billAmount);
        const tip = (bill * tipPercentage) / 100;
        const totalAmount = bill + tip;
        const tipAmountPerPerson = tip / splitCount;
        const totalAmountPerPerson = totalAmount / splitCount;

        setTipAmount({
            totalAmount: totalAmount.toFixed(2),
            tipPerPerson: tipAmountPerPerson.toFixed(2),
            totalPerPerson: totalAmountPerPerson.toFixed(2)
        });
        setError("");
    }

    return (
        <div className='tip-calculator'>
            <h1>Tip  Calculator</h1>
            <div className='input-container'>
                <label>Bill Amount:</label>
                <input value={billAmount} type="number" onChange={(event) => setBillAmount(event.target.value)} />
            </div>
            <div className='input-container'>
                <label>Tip Percentage:</label>
                <input value={tipPercentage} type="number" onChange={(event) => setTipPercentage(event.target.value)} />
            </div>
            <div className='input-container'>
                <label>Number of People:</label>
                <input value={splitCount} type="number" onChange={(event) => setSplitCount(event.target.value)} />
            </div>
            <button onClick={handleCalculateTip}>Calculate Tip</button>
            {
                error && <p>{error}</p>
            }
            {
                tipAmount ? <div className='tip-result'>
                    <p>Total Amount : {tipAmount.totalAmount}</p>
                    <p>Tip Per Person : {tipAmount.tipPerPerson}</p>
                    <p>Total Amount Per Person : {tipAmount.totalPerPerson}</p>
                </div> : null
            }
        </div>
    )
}

export default TipCalculator
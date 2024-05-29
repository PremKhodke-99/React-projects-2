import React, { useEffect, useState } from 'react'
import "./currency.css"

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [exchangeRate, setExchangeRate] = useState();
    const [convertedAmount, setConvertedAmount] = useState();

    async function fetchEchangeRate() {
        const apiResponse = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`, {
            method: "GET"
        });

        const result = await apiResponse.json();
        const calculatedRate = result?.rates[toCurrency];
        setExchangeRate(calculatedRate);

        setConvertedAmount((amount * calculatedRate).toFixed(2));
        console.log(result);
    }

    useEffect(() => {
        fetchEchangeRate();
    }, [fromCurrency, toCurrency, amount])

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    function handleFromCurrencyChnage(event) {
        setFromCurrency(event.target.value);
    }

    function handleToCurrencyChange(event) {
        setToCurrency(event.target.value);
    }
    return (
        <div className='currency-converter'>
            <h1>Currency Converter</h1>
            <div className='input-container'>
                <input value={amount} onChange={handleAmountChange} type="number" name='fromcurrency' placeholder='Enter Amount' />
                <select value={fromCurrency} onChange={handleFromCurrencyChnage} id="">
                    <option value={'USD'}>USD</option>
                    <option value={'INR'}>INR</option>
                    <option value={'EUR'}>EUR</option>
                </select>
            </div>
            <p>To</p>
            <div className='input-container'>
                <input type="text" value={convertedAmount} readOnly />
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value={'EUR'}>EUR</option>
                    <option value={'INR'}>INR</option>
                    <option value={'USD'}>USD</option>
                </select>
            </div>
            <p>Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}</p>
        </div>
    )
}

export default CurrencyConverter
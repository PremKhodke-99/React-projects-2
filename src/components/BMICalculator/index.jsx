import React, { useState } from 'react'
import './bmi.css'

const BMICalculator = () => {

    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [bmi, setBmi] = useState(null);
    const [error, setError] = useState('');

    function calculateBmi() {
        if (!height || !weight) {
            setError('Please enter both height and weight');
            return;
        }

        const numericHeight = parseFloat(height);
        const numericWeight = parseFloat(weight);

        if (isNaN(numericHeight) || isNaN(numericWeight) || numericHeight <= 0 || numericWeight <= 0) {
            setError('Please enter valid value for both height and weight');
            return;
        }

        const calculateHeightInMeters = numericHeight / 100;
        const calculateBmiValue = (numericWeight / (calculateHeightInMeters * calculateHeightInMeters)).toFixed(2);

        setBmi(calculateBmiValue);
        setError('');
    }

    return (
        <div className='bmi-calculator-container'>
            <h1>BMI Calculator</h1>
            <div className="input-container">
                <label>Height (cm):</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Weight (kg):</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            {error && <p className='error-message'>{error}</p>}
            {error !== '' ? null : <p className='bmi-result'>
                {bmi < 18.5
                    ? 'Underweight'
                    : bmi >= 18.5 && bmi <= 24.9
                        ? 'Normal weight'
                        : bmi >= 25 && bmi < 29.9
                            ? 'Overweight'
                            : 'Obese'
                }
            </p>}
        </div>
    )
}

export default BMICalculator
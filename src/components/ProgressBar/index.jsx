import React, { useState } from 'react'
import './progress.css'

function ProgressBar() {

    const [progressPercent, setProgressPercent] = useState(0);
    const [error, setError] = useState("");

    function handleProgressPercentage(e) {
        if (e.target.value > 100) {
            setError('Please enter a vlue less than 100')
        } else {
            setError('');
            setProgressPercent(e.target.value);
        }
    }

    return (
        <div className='progress-bar-container'>
            <h1>Custom Progress Bar</h1>
            <div className='progress-bar'>
                <div className="wrapper">
                    {
                        progressPercent >= 0 && progressPercent <= 100 ? (
                            <div
                                style={{ width: `${progressPercent}%` }} className='inner-wrapper'
                            >
                                {progressPercent}
                            </div>
                        ) : (<p>{error}</p>)
                    }
                </div>
            </div>
            <div className="input-container">
                <label>Input Percentage: </label>
                <input type="number"
                    value={progressPercent}
                    onChange={handleProgressPercentage}
                />
            </div>
        </div>
    )
}

export default ProgressBar
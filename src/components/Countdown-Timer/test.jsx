import React from 'react'
import CountdownTimer from './CountdownTimer'

function CountdownTimerTest() {
    const handleTimeFinish = () => {
        console.log("Times up");
    }

    return (
        <div className='countdown-timer-container'>
            <h1>CountDown Timer</h1>
            <CountdownTimer initialTime={120} onTimeFinish={handleTimeFinish} />
        </div>
    )
}

export default CountdownTimerTest
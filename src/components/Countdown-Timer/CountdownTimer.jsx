import React, { useEffect, useRef, useState } from 'react'
import './timer.css'

function CountdownTimer({ initialTime, onTimeFinish }) {

    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(true);
    const intervalReference = useRef();

    useEffect(() => {
        if (isRunning) {
            //interval
            intervalReference.current = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime === 0) {
                        clearInterval(intervalReference.current);
                        setIsRunning(false);

                        if (onTimeFinish) {
                            onTimeFinish();
                        }

                        return 0;
                    }
                    return prevTime - 1;
                })
            }, 1000)
        } else {
            clearInterval(intervalReference.current);
        }

        return () => {
            clearInterval(intervalReference.current);
        }

    }, [isRunning, onTimeFinish]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const handeleResumeAndPause = () => {
        setIsRunning(prevIsRunning => !prevIsRunning);
    }

    const handleReset = () => {
        clearInterval(intervalReference.current);
        setTime(initialTime);
        setIsRunning(false);
    }

    const handleStart = () => {
        setIsRunning(true);
    }

    return (
        <div className='timer'>
            <p>
                {String(minutes).padStart(2, '0')}: {String(seconds).padStart(2, '0')}
            </p>
            <div className='timer-buttons'>
                <button onClick={handeleResumeAndPause}>{isRunning ? 'Pause' : 'Resume'}</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}

export default CountdownTimer
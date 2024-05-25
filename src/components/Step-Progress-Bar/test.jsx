import React from 'react'
import { useState } from 'react'
import StepProgressBar from '.';

function StepProgressBarTest() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
    
    return (
        <div className='step-progress-bar-container'>
            <h1>Step Progress Bars</h1>
            <StepProgressBar steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
    )
}

export default StepProgressBarTest
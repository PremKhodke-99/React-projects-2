import { useState } from 'react'
import './App.css'
import PaginationTest from './components/Pagination/test'
import DigitalClock from './components/DigitalClock/DigitalClock'
import CountdownTimerTest from './components/Countdown-Timer/test'
import StepProgressBarTest from './components/Step-Progress-Bar/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PaginationTest />
        <DigitalClock />
        <CountdownTimerTest />
        <StepProgressBarTest />
      </div>
    </>
  )
}

export default App

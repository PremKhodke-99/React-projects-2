import { useState } from 'react'
import './App.css'
import PaginationTest from './components/Pagination/test'
import DigitalClock from './components/DigitalClock/DigitalClock'
import CountdownTimerTest from './components/Countdown-Timer/test'
import StepProgressBarTest from './components/Step-Progress-Bar/test'
import RandomQuoteGenerator from './components/RandomQuote-generator/RandomQuoteGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PaginationTest />
        <DigitalClock />
        <CountdownTimerTest />
        <StepProgressBarTest />
        <RandomQuoteGenerator />
      </div>
    </>
  )
}

export default App

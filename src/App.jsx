import { useState } from 'react'
import './App.css'
import PaginationTest from './components/Pagination/test'
import DigitalClock from './components/DigitalClock/DigitalClock'
import CountdownTimerTest from './components/Countdown-Timer/test'
import StepProgressBarTest from './components/Step-Progress-Bar/test'
import RandomQuoteGenerator from './components/RandomQuote-generator/RandomQuoteGenerator'
import TooltipTest from './components/Tooltip/test'
import CurrencyConverter from './components/CurrencyConverter'

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
        <TooltipTest />
        <CurrencyConverter />
      </div>
    </>
  )
}

export default App

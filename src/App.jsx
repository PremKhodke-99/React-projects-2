import './App.css'
import PaginationTest from './components/Pagination/test'
import DigitalClock from './components/DigitalClock/DigitalClock'
import CountdownTimerTest from './components/Countdown-Timer/test'
import StepProgressBarTest from './components/Step-Progress-Bar/test'
import RandomQuoteGenerator from './components/RandomQuote-generator/RandomQuoteGenerator'
import TooltipTest from './components/Tooltip/test'
import CurrencyConverter from './components/CurrencyConverter'
import FilterProducts from './components/FilterCards'
import TipCalculator from './components/TipCalculator'
import MusicPlayer from './components/MusicPlayer'
import ProgressBar from './components/ProgressBar'
import BMICalculator from './components/BMICalculator'
import ButtonRippleEffect from './components/ButtonRippleEffect'
import DragAndDrop from './components/DragAndDrop'
import FormValidation from './components/SimpleFormValidation'
import FileUpload from './components/FileUpload'
import Quiz from './components/QuizApp'
import NestedComments from './components/NestedComments'
import PdfViewer from './components/PdfViewer'
import FirebaseTodo from './components/FirebaseTodo'
import FirebaseAuth from './components/FirebaseAuth'
import DebounceApiCall from './components/DebounceApiCall'
import SortData from './components/SortData'
import GoogleOAuth from './components/GoogleOAuthLogin'

function App() {

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
        <FilterProducts />
        <TipCalculator />
        <MusicPlayer />
        <ProgressBar />
        <BMICalculator />
        <ButtonRippleEffect />
        <DragAndDrop />
        <FormValidation />
        <FileUpload />
        <Quiz />
        <NestedComments />
        <PdfViewer />
        <FirebaseTodo />
        <FirebaseAuth />
        <DebounceApiCall />
        <SortData />
        <GoogleOAuth />
      </div>
    </>
  )
}

export default App

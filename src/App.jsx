import { useState } from 'react'
import './App.css'
import PaginationTest from './components/Pagination/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PaginationTest />
      </div>
    </>
  )
}

export default App

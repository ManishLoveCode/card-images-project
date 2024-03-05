import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <div className='flex flex-wrap gap-1 mt-16'>
    <Card />
    </div>
    </>
  )
}

export default App

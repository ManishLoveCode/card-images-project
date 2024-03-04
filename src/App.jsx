import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <h1>Hello world</h1>
    <Card />
    </>
  )
}

export default App

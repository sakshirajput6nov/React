import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const[count,setCount]=useState('');

  return (
    <>
      <Card title="Card1"name="sakshi" count={count} setCount={setCount}/>
      <Card title="Card2" name="rajput" count={count} setCount={setCount}/>
      {/* <p> i am react {count} </p> */}
    </>
  )
}

export default App

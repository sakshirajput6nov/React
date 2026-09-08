import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from "./Components/Card"

import Button1 from './Components/Button1'

function App() {
  const[count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }

  return (
    <>
    <Button1 handleClick={handleClick} >
        <h2>{count}</h2>
      </Button1>
    <Card name="Sakshi Rajput">
      <h3>hello h3 heading </h3>
      <p>hi i am sakshi </p>
    </Card>
    <Card children="click click ">
      {/* by default */}
      <button>click me</button>
    </Card>
    </>
    
  )
}

export default App

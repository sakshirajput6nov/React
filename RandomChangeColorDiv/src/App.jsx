import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[color,setColor]=useState("white")
  function handleClick(){
    setCount(count+1)
    setColor(chnageColor());
  }
  function chnageColor(){
    let r=150+Math.round(100*Math.random());
    let g=150+Math.round(100*Math.random());
    let b=150+Math.round(100*Math.random());
    return `rgb(${r},${g},${b})`;
  }
  return (
    <>
     <div style={{color:"aqua",background:color}} onClick={handleClick}>hi i am div babu
      have count is {count}
     </div>
    </>
  )
}

export default App

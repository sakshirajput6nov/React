import { useState } from 'react'
import { useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Timer from "./components/Timer"
import Logger from './components/Logger'

function App() {
  // const [count, setCount] = useState(0);
  // const[total,setTotal]=useState(0);
  // function useEffect(() => {
  //   first //side effect function
  
  //   return () => {
  //     second//cleam up function
  //   }
  // }, [third])// coma separated dependency list
  


  // useEffect(() => {
  //   alert("every time render karega  ")
  //   //render 2 times in StrictMode for developer mode 
  // })
  ///////////////////
  // function handleClick(){
  //   setCount(count+1)
  // }
  // function handleClick1(){
  //   setTotal(total+1)
  // }
  // // Variation 1
  // useEffect(() => {
  //   alert("render karega hr baar each time")
  
  // })
  /////////////////////count update -> useEffect -> render hota h 
  
  // variation 2
// useEffect(() => {
//   alert("render only once i.e one time")
// }, [])

  //variation 3
  // useEffect(() => {
  //   alert("count value update hogi tho uske baad useEffect chalega ")
  //   //first time bhi chalega kyuki uss time useState se count=0 hoga then for count+1 ...
  // }, [count])

  //variation 4
  // useEffect(() => {
  //   alert("show when total / count value updated ")
  // }, [count,total])
  
  // //variation 5
  // useEffect(() => {
  //   alert("buttton clicked")
  
  //   return () => {
  //     alert("count unmounted")
  //   }
  // }, [count])
  

  return (
    <div>
      i am react hook
    {/* <button onClick={handleClick} >count </button>
    <button onClick={handleClick1} >total </button>
    <h2> my count is{count}</h2>
    <h2> my total is{total}</h2> */}
   <Logger/>
    </div>
  )
}

export default App

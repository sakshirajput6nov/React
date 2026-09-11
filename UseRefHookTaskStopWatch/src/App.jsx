import { useRef, useState } from 'react'
import './App.css'
// START
//   ↓
// setInterval()
//   ↓
// ID = 123
//   ↓
// timeRef.current = 123
//   ↓
// Timer running
//   ↓
// STOP clicked
//   ↓
// clearInterval(123)
//   ↓
// Timer stopped
//   ↓
// timeRef.current = null
function App() {
const[time,setTime]=useState(0);
let timeRef=useRef(null);
 function handleStart(){
    timeRef.current=setInterval(()=>{
      setTime(time=>time+1)},1000
    );
    
 }
 function handleStop(){
  clearInterval(timeRef.current);
  timeRef.current=null;
 }
function handleReset(){
  handleStop();
  setTime(0);
 }
  return (
    <>
    <h1>time is {time} seconds</h1>
    <br/>
    <br/>
    <button onClick={handleStart}>Start</button>
    <br/>
    <br/>
    <button onClick={handleStop}>Stop</button>
    <br/>
    <br/>    
    <button onClick={handleReset}>Reset</button>
    <br/>
    <br/>

    

     
    </>
  )
}

export default App

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function mouseHoverHandle(){
  alert("button pr aaye ho ")
}
function phandler(){
  alert("p pr aaye ho")
}
function formHandler(e){
  e.preventDefault();
  alert("submit kr do form")
}
function submitHandler(){
  alert ("submit btn click kiya h")
}
function inputHandler(e){
  console.log(e,"change kr rahe ho")
  // alert("type kr rhe ho ")
}function doubleClick(){
  alert("double click kiya")
}
  return (
    <><form onSubmit={formHandler}>
      <input type="text" onChange={inputHandler}></input>
      <button type="submit" onClick={submitHandler}>submit</button>
    </form>
      <p onClick={phandler} style={{color:"red"}}>hi i am Sakshi</p>
      <button onMouseOver={mouseHoverHandle}>click me</button>
      <p onDoubleClick={doubleClick}>hi hello jiii</p>
      {/* onMouseOut,onMouseDown,onMouseUp */}
      {/* <button onClick={alert("hii button")}>click</button> */}
      <button onClick={()=>{alert("hii button")}}>click</button>
    </>
  )
}

export default App

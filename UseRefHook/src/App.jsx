import { useState ,useEffect} from 'react'
import './App.css'
import { useRef } from 'react'
// useRef is used to store a mutable value that persists across re-renders without causing a re-render when its value changes. It can also be used to directly reference DOM elements.
function App() {
  const [count, setCount] = useState(0);
  // differenve in useState and useRef
  // state - variable value change then re render
  //(use case 1 of useRef ) ref -variable value change then no re render i.e  persist value
  // (usecase 2 of useRef) reference create -> reference link -> reference accress /change 
  let val1=0;
  // it reset to 0 when re render
  let val2=useRef(0);
  // useRef do not reset when re render 
  //telll every render
  useEffect(() => {
    val1=val1+1;
    val2.current=val2.current+1;
    console.log( "render hua h phir se ")
    console.log("val1 : ", val1);
    console.log("val2 : ", val2.current);
  })
  let btnRef=useRef();//create reference
  
  function handleClick(){
    setCount(count+1)
  }
  function handleChangeColor(){
    btnRef.current.style.backgroundColor="red";
  }
  function handleRemoveColor(){
    btnRef.current.style.backgroundColor="";
  }
  return (
    <>
    {/* increment btn ko refer kiya using ref={} */}
    <div><button ref={btnRef} onClick={handleClick}>increment</button></div>
    <div>count : {count}</div>
    <div><button onClick={handleChangeColor} onDoubleClick={handleRemoveColor}>change color above btn</button></div>

      
    </>
  )
}

export default App

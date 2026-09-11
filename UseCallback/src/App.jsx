import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ChildComponent from './components/ChildComponent'
import { useCallback } from 'react'
import ExpensiveCalculation from './components/ExpensiveCalculation'
// use case 1 of useCallback()-----avoid uneccessary re render of child component
// use case 1 of useCallback()------ handle expensive operation (good practice)do not re create uneccesary function
function App() {
  const [count, setCount] = useState(0)
  // function handleClick(){
  //   setCount(count+1);
  // }
  // instead of this named function
  // const handleClick=useCallback(()=>{
  //    setCount(count+1);},[]
  // );// still we can't use count increment funtionality
  const handleClick=useCallback(()=>{
     setCount(count+1);},[count]
  );
  // usecallack()-to freeze function reference
  
  return (
    <>
    <ExpensiveCalculation/>
     {/* <div>count:{count}</div>
     <div>
        <button onClick={handleClick}>
          click me inc
        </button>
     </div>
     
     <ChildComponent Name="sakshii" fun={handleClick}/> */}
    </>
  )
}

export default App

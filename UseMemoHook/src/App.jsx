import { useState ,useMemo} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// useMemo stores (memoizes) the result of an expensive calculation and recalculates it only when its dependencies change.
// const result = useMemo(() => expensiveTask(input), [input]);
// * input same → use previous result 
// * input changes → calculation runs again 
// Main purpose: Avoid unnecessary expensive calculations.
function App() {
  const [count, setCount] = useState(0)
  const[input,setInput]=useState(null)
  function handleClick(){
    setCount(count+1)
  }
  function expensiveTask(num){
    console.log("entered in expensive task function");
    for (let i=0;i<1000000000;i++){

    }
    return num*2;
  }
  let val=  useMemo(() => expensiveTask(input), [input]);

  return (
    <>count is {count}
      <button onClick={handleClick}>click me inc</button>
     
      <input
      placeholder='enter value  for expensive function'
      type='number'
      value={input}
      onChange={(e) => setInput(Number(e.target.value))}
      
      />
       <h2>val :{val} </h2>
    </>
  )
}

export default App

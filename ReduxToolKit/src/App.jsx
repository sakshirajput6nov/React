// set up workflow
// Slice → Reducer → Actions → Store → Provider → Component
// runtime workflow (when user click a button)
// USER
//  ↓
// UI / Button
//  ↓
// onClick
//  ↓
// dispatch()
//  ↓
// ACTION
//  ↓
// STORE
//  ↓
// REDUCER
//  ↓
// STATE UPDATE
//  ↓
// STORE
//  ↓
// useSelector()
//  ↓
// UI UPDATE
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,reset,incrementByAmount} from './features/counter/counterSlice'

function App() {
  const[amount,setAmount]=useState(0);
  const count=useSelector((state)=> state.counter.value);
  const dispatch=useDispatch();
  function handlIncrementClick(){
    dispatch(increment());
  }
  function handleDecrementClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleAmtIncClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className="container">
       
      <button onClick={handlIncrementClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br/>
      <br/>
      <button onClick={handleResetClick}>Reset</button>
      <br/>
      <input
        type="Number"
        value={amount}
        placeholder="Enter Amount value"
        onChange={(e)=> setAmount(e.target.value)}
      />
      <br/>
      <button onClick={handleAmtIncClick}>Increase by amount </button>
    </div>
  )
}

export default App

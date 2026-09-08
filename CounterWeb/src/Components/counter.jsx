import React, { useState } from 'react'
import "./counter.css"
const Counter = () => {
    const[count,setCount]=useState(0);
  return (
    <div>
        <p >hii  u clicked me {count}times</p>
        <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}

export default Counter
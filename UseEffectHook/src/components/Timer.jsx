import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const Timer = () => {
    const[count,setCount]=useState(1);
    useEffect(() => {
       let interval=setInterval(() => {console.log("execution......");setCount(count => count+1)},1000);
       
    
      return () => {
        console.log("execution stopped")
        clearInterval(interval)
      }
    }, [])
    
  return (
    <div>
       <h2>time is {count} seconds</h2>

    </div>
  )
}

export default Timer
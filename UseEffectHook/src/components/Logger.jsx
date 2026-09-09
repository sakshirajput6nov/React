import React, { useEffect } from 'react'
import { useState } from 'react';

const Logger = () => {
    const[c,setC]=useState(0);
    useEffect(() => {
      alert("ho gya button click")
    }, [c])
    
  return (
    <div>Logger
        <button onClick ={()=>setC(c+1)}> click me increment </button>
    </div>
  )
}

export default Logger
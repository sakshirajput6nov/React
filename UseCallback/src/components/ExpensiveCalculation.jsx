import React from 'react'
import { useRef } from 'react';
import { useCallback,useState,useEffect } from 'react';

const ExpensiveCalculation = () => {
    const[c,cSet]=useState(0);
    const[t,tSet]=useState(0);
    // use to verify useCallback() only re create when c update
    const prevFun=useRef("null");
    let exp=useCallback(
        ()=>{
        console.log("running  expensive calculation ");
        let result=0;
        for(let i=0;i<=100000;i++){
            result+=i;
        }
        return result;
        },[c]
    );
    useEffect(() => {
     if(prevFun.current ){
        if(prevFun.current===exp){
            console.log("function not re created ")
        }
        else{
            console.log("function  re created ")
        }
     }
     else{
        prevFun.current=exp;
     }
    
    
    }, [exp])
    
    //c update then only function re create , no update so no re create function
  return (
    <div>
        <h3>c:{c}</h3>
        <p>t:{t}</p>
        <button onClick={()=>cSet(c+1)}>click c</button>
        <br/>
         <br/>
        <input
        type='number'
        placeholder="enter number"
        value={t}
        onChange={(e)=>tSet(e.target.value)}
        />
        <p> exp calculation:{exp()}</p>

    </div>
  )
}

export default ExpensiveCalculation
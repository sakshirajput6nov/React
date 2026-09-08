import React from 'react'

const Card = (props) => {
  return (
    <div>Card
        
       
       
        <input type="text" onChange={(e)=>props.setCount(e.target.value)} ></input>
         {props.count}
        {props.name}
         {props.title}
        <p> count is {props.count}</p>
    </div>
  )
}

export default Card
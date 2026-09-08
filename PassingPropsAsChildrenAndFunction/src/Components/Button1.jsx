import React from 'react'

const Button1 = (props) => {
  return (
    <div>
       {props.children}
        <button onClick={props.handleClick}>click me
            
        </button>
    </div>
  )
}

export default Button1
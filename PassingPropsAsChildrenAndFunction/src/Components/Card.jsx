import React from 'react'

const Card = (props) => {
  return (
    <div>Card
        <h1>hello</h1>
        {props.children}
        {props.name}
    </div>

  )
}

export default Card
import React from 'react'

const Card = (props) => {
  return (
    
     <button onClick={() => props.login(true)}>log in </button>
  )
}

export default Card
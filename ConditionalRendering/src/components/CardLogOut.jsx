import React from 'react'

const CardLogOut = (props) => {
  return (
    <button onClick={() => props.login(false)}>log out</button>
  )
}

export default CardLogOut
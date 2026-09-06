import React from 'react'
import './UserCard.css'
const UserCard = (props) => {
  return (
    <div className="user-container" style={props.style}>
        <h1 className='name'>{props.name}</h1>
        {/* <img id="image" src={sakshitcspic} alt="my image"></img> */}
        <p id="para" >{props.desc}</p>
        <img id="image" src={props.image} alt="my image" />
    </div>
  )
}

export default UserCard
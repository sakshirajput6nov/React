import React from 'react'
//useNavigate hook use for navigating from 1 page to other page explicitly
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate=useNavigate();
    function handleClick(){
        navigate("/");
    }
    function goToDashboard(){
        navigate('/Dashboard');
    }
  return (
    <div>About Page
        <button onClick={handleClick}>Home Page</button>
        <button onClick={goToDashboard}>Dashboard</button>
    </div>
  )
}

export default About
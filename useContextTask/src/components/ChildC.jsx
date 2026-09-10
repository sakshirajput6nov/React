import React from 'react'
import {userContext1} from '../App'
import { useContext } from 'react'

const ChildC = () => {
    const {theme,setTheme}=useContext(userContext1);
    function handleClick(){
        if(theme=="light"){
            setTheme("black")
        }
        else{
            setTheme("light")
        }
    }
    
  return (
    <div>
        {/* hello jiii
        {theme} */}
        
            <button onClick={handleClick}>click me for theme change</button>
        
    </div>
  )
}

export default ChildC
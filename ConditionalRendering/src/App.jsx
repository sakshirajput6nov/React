import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/CardLoginIn'
import CardLogOut from './components/CardLogOut'
function App() {
  const[isLoggedIn,login]=useState(false);
if(!isLoggedIn){
  return(<>
    <Card isLoggedIn={isLoggedIn} login={login}/>
    
    </>
    
  )
}


return(<div>
<div>
      {isLoggedIn && <CardLogOut isLoggedIn={isLoggedIn} login={login}/>}
      {/* {!isLoggedIn && <Card/>} */}
      
      </div>
   </div>

)



// return(
//   <>
//   {isLoggedIn?<CardLogOut/>:<Card/>}
//   </>
// )
    // if(!isLoggedIn){
    //    return (
    //    <Card/>)
    // }
    // else{
    //   return(
    //   <CardLogOut />)
    // }
    
   
  
}

export default App

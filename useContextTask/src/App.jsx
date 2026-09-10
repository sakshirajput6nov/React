import { useState,createContext } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ChildA from './components/ChildA'
// toggle theme 
const userContext1=createContext();
function App() {
 
  const[theme,setTheme]=useState("light");
  return (
    
    <userContext1.Provider value={{theme,setTheme}}>
      <div id="container" style={{backgroundColor:theme=="light"?"beige":"black"}}>
       <ChildA/></div>
    </userContext1.Provider>
      
    
  )
}

export default App

export {userContext1}
//import {userContext1}  from '../App'
//export default userContext1 // if agr yeh as default export krte tho pr ek he kr sakte h 
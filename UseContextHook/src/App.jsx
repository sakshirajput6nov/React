import { useState,useContext, createContext } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ChildA from './components/ChildA'
///steps for useContext
//1 : create Context and import createContext
//2 : wrap all child inside a provider, export provider
//3 : pass value i.e value={usestate variable name}
//4 : consumer file m import kro provider ko ,then useContext import ,use useContext API to use provider 
//5 : can use like eg. {user.name}
const UserContext=createContext();
function App() {
  const [user, setUser] = useState({name:"Sakshi"});

  return (
    <>
      helloji
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}

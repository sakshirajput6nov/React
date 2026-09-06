import './App.css'
import UserCard from './Components/UserCard'
import sakshitcspic from "./assets/sakshitcspic.jpeg"
import black from "./assets/black.jpeg"
import casual from "./assets/casual.jpg"

function App() {
  return (
    <>
      <h1>hello hi hi </h1>
      <h2>ewdwe</h2>
      <UserCard name="sakshi" desc="i am Sakshi" image={black}  style={{"border-radius":"40px"}}/>
      <UserCard name="Rajput" desc="i am Rajput"image={casual} style={{"border-radius":"40px"}}/>
      <UserCard name="SR" desc="i am SR" image={sakshitcspic} style={{"border-radius":"40px"}}/>
    </>
  )
}

export default App

import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import PageNotFound from './components/PageNotFound';
// const router=createBrowserRouter(
//   [
//   {path:"/",element:<Home/>},
//   {path:"/About",element:<About/>},
//   {path:"/Dashboard",element:<Dashboard/>}
//   ]
// )

// have to make single page project 
// no reload should take place ,so no use Link to route using router dom
const router=createBrowserRouter(
  [
  {path:"/",element:<div><NavBar/><Home/></div>},
  {path:"/About",element:<div><NavBar/><About/></div>},
  {path:"/Dashboard",element:<div><NavBar/><Dashboard/></div>,
    children:[{
      path:"courses",element: <Courses/>
    },{
      path:"mock-test",element: <MockTest/>
    },{
      path:"*",element:<PageNotFound/>
    }]
  },
  {path:"/Student/:id",element:<div><NavBar/><ParamComp/></div>}
  ]
)
function App() {
 

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App

import { useEffect, useState } from "react"
import React from 'react'

const ResizeComponent = () => {
    const[windowWidth,setWindowWidth]=useState(window.innerWidth);
        function handleResize(){
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
    
      window.addEventListener("resize",handleResize);
    
      return () => {
         window.removeEventListener("resize",handleResize);
      }
    }, [])
    
  return (
    <div><h1>ResizeComponent have window width of {windowWidth} px</h1></div>
  )
}

export default ResizeComponent

// import React, { useState, useEffect } from 'react';

// function ResizeComponent() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//     // window.innerWidth gives the current browser window width in pixels.
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Window width: {windowWidth}px</h1>
//     </div>
//   );
// }

// export default ResizeComponent;
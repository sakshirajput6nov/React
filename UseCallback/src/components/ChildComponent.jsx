import React from 'react'
import { useMemo } from 'react'

const ChildComponent = React.memo(
    // changes only when there is change in its props value ,do not re render bcz of change in parent 
    (props) => {
     console.log("cc re render");
  return (
    <div>
        
      
     <button onClick={props.fun}>{props.Name}</button> 
    </div>
   
  )
}
)

export default ChildComponent
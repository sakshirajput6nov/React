import { useContext } from 'react'
import React from 'react'
import { UserContext } from '../App'

const ChildC = () => {
    const userr=useContext(UserContext);
  return (
    <div>ChildC :
        {userr.name}
    </div>
  )
}

export default ChildC
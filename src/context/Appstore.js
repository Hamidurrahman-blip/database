import React, { useState } from 'react'
import Appcontext from './Appcontext'

export default function Appstore({children}) {
  const [cartitems,setcartitems]=useState([])
    return (
    <Appcontext.Provider value={{cartitems,setcartitems}}>
        {children}
    </Appcontext.Provider>
  )
}

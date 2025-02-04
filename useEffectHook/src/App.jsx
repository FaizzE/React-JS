// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [cnt, setCnt] = useState(0);
  
  useEffect(()=> {
    setTimeout(()=> {
      setCnt(cnt => cnt+1)
    },1000)
  },[cnt])

  return (
    <>
      <h1>Ive rendered {cnt} times!</h1>
    </>
  )
}

export default App

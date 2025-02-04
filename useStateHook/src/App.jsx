// import React from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  //   const [color, setColor] = useState('Red')
  //   const colorChangeKaro = () => {
  //       setColor('Pink!')
  //   }
  // return (
  //   <>
  //     <h1>My Favorite Color is {color}</h1>
  //     <button onClick={colorChangeKaro}>{color}</button>
  //   </>
  // )

    const [car, setCar] = useState({
        brand : "Bently",
        model : "Roma",
        year : "2023",
        color : "red"
    });
    const changeKaro = ()=> {
      setCar((prev)=>{
        return {...prev, color : "Pink"}
      })
    }

    return (
      <>
        <h1>My {car.brand}</h1>
        <h2>It is a {car.color} {car.model} from {car.year}</h2>
        <button onClick={changeKaro}>Jadui Button</button>
      </>
    )

}

export default App

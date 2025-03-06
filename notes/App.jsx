import { useState } from 'react'
import './App.css'
import React from "react";
import LoginPage from '../src/pages/login.jsx';
import RegisterPage from '../src/pages/register.jsx';

// ini disebut Class Component
// class Button extends React.Component {
//   render() {
//     return (
//       <button className='bg-black text-white px-4 py-3 rounded-xl'>Submit here</button>
//     );
//   }
// }

// ini disebut sebagai Functional component
// function BlackButton(){
//   return (
//     <button className='bg-slate-700 text-white px-4 py-3 rounded-xl'>Submit here</button>
//   )
// }


// bisa juga dibuat Functional Component dengan arrow
// const RedButton = () => {
//   return (
//     <button className='bg-red-700 text-white px-4 py-3 rounded-xl'>Submit here</button>
//   )
// }




// Nah selanjutnya adalah props
// class Button extends React.Component {
//   render() {
//     return (
//       <button className={`${this.props.variant} text-white px-4 py-3 rounded-xl`}>Submit here</button>
//     );
//   }
// }


// Kalau function ga perlu this
// function Buttonz(props) {
//   return (
//     <button className={`${props.variant} text-white px-4 py-3 rounded-xl`}>{props.children}</button>
//   )
// }


// Cara lain untuk props -> destructuring
// function Buttonz(props) {
//   const {children = "...", variant="bg-black"} = props;
//   return (
//     <button className={`${variant} text-white px-4 py-3 rounded-xl`}>{children}</button>
//   )
// }


function App() {
  return (
    <>
      {/* Ini adalah bentuk duplikat, sehingga harus dibuat template */}
      {/* <button className='bg-black text-white px-4 py-3 rounded-xl'>Submit here</button>
      <button className='bg-black text-white px-4 py-3 rounded-xl'>Submit here</button>
      <button className='bg-black text-white px-4 py-3 rounded-xl'>Submit here</button> */}


      {/* <Button></Button>
        <BlackButton></BlackButton>
        <RedButton></RedButton> */}

      {/* dengan props
        <Buttonz variant="bg-black">Login</Buttonz>
        <Buttonz variant="bg-red-500">Sign-Up</Buttonz>
        <Buttonz variant="bg-black">Register</Buttonz>
        <Buttonz></Buttonz> */}
        <RegisterPage />
        {/* <RegisterPage></RegisterPage> */}

    </>
  )
}

export default App

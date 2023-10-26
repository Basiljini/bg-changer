import React from 'react'
import { useState } from 'react'
function Home() {

    const black = "#000000"
   
    const [bgColor, setBgColor] = useState(black);
    const changeRed =()=>{
        let red = '#c70c18'
        setBgColor(red);
      }
      const changeBlue =()=>{
        let blue = '#211899'
        setBgColor(blue);
      }
      const changeGreen =()=>{
        let green = '#2fa132'
        setBgColor(green);
      }
      const changeYellow =()=>{
        let yellow = "#e6e212"
        setBgColor(yellow);
      }
      const reset=()=>{
        setBgColor(black)
      }

  return (
    <div style={{backgroundColor:bgColor,height:'85vh'}}>
         <div className='mt-5 container d-flex flex-column justify-content-evenly'>
            <h1 className='text-light text-center fw-bolder mb-5' style={{color:'white'}}>BackGround Changer</h1>
            <div className='d-flex justify-content-evenly mt-5 align-items-center mb-5'>
                <button style={{width:'15vh'}} onClick={changeRed} className='red btn btn-danger'>Red</button>
                <button style={{width:'15vh'}} onClick={changeBlue} className='blue btn btn-primary'>Blue</button>
                <button style={{width:'15vh'}} onClick={changeGreen}  className='green btn btn-success'>Green</button>
                <button style={{width:'15vh'}} onClick={changeYellow} className='yellow btn btn-warning'>Warning</button>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5'>
            <button style={{width:'15vh',backgroundColor:'white'}} onClick={reset}  className=' btn'>Reset</button>
            </div>
         </div>
    </div>
  )
}

export default Home
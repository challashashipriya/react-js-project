import React, {useState} from 'react'
import './Home.css'

export default function Home() {
    const[username,setusername]=useState('')
    const[userpassword,setuserpassword]=useState('')

    function submit(){
        console.log(username,userpassword)
        setuserpassword('')
        setusername('')
    
      }
  return (
    <div className='home-container'>
      <h1 className = 'home'>This is Home</h1> 
      <p>
        <input 
        value={username}
         placeholder='enter name' 
        onChange={(e)=>{setusername(e.target.value)}}/>
        </p>
        <p>
        <input value ={userpassword}
         placeholder='enter password' 
         onChange={(e)=>{setuserpassword(e.target.value)}}/>
        </p>
        <p>
        <button onClick={submit}>Submit</button>
      </p>
    </div>
    
  )
}

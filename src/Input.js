import React,{useState} from 'react'
import './Input.css'

export default function Input() {
    const[username,setusername]=useState('')
    const[userid,setuserid]=useState('')
    function handleUsername(e){
        setusername(e.target.value)
    }
    function handleUserid(e){
        setuserid(e.target.value)
    }
    function submit(){
        console.log(username)
        console.log(userid)
    }
  return (
    <div className='container' >
      <p>
        <input placeholder='enter name' onChange={handleUsername}/>
        <input placeholder='enter id' onChange={handleUserid}/>
        <button onClick={submit}>Submit</button>
      </p>
    </div>
  )
}

import React,{useState} from 'react'

export default function About() {
  const[newUser,setNewUser]=useState({
    name: '',
    email:'',
    password:''
  })
  function handleUser(e) {
    const {name,value}=e.target
    console.log(name,value)
    setNewUser(prevUser=>({
      ...prevUser,
      [name]:value
    }))
  }
  return (
    <div>
      <h1>This is About</h1>
      <p>
        <input 
        placeholder ='name'
        name="name"
        value={newUser.name}
        onChange={handleUser}/>
      </p>
      <p>
        <input 
        placeholder ='email'
        name="email"
        value={newUser.email}
        onChange={handleUser}/>
      </p>
      <p>
        <input 
        placeholder ='password'
        name="password"
        value={newUser.password}
        onChange={handleUser}/>
      </p>
      <button onClick={()=>console.log(newUser)}>Submit</button>
    </div>
  )
}

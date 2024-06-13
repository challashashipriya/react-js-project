import React,{useState} from 'react'
import './List.css'

export default function List() {
    const [employees,setEmployees]=useState([{
        name:"yuva",
        age:22,
        id:14,
        gender:"male"
    },
    {
        name:"chandra",
        age:20,
        id:16,
        gender:"male"
    },
    {
      name:"hemanth",
      age:21,
      id:24,
      gender:"male"
  },
  {
    name:"pavan",
    age:19,
    id:7,
    gender:"male"
}])
  return (
    <div className='employee-container'>
      {
        employees.map((emp)=>(
        <div className='employee'key={emp.id}>
          <p>Name : {emp.name}</p>
          <p>Age : {emp.age}</p>
          <p>Gender : {emp.gender}</p>
          <p>Id : {emp.id}</p>
          </div>
         ) )
      }
    </div>
  )
}


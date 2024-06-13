import {useState} from 'react'
// import Student from  './Student'
// import List from './List'
// import Input from'./Input'
// import Example from './Example'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navigation from './components/Navigation'
import Contact from './components/Contact'
function App (){
  const [studentName,setStudentName] = useState('Maha')
  const[age,setAge]=useState(17)
  return(
     <div>
      {/* <Example/> */}
       <BrowserRouter>
       <Navigation/>
       <Routes>
         <Route path="/" element={<Home/>}/>
       <Route path="/contact" element={<Contact/>}/>
         <Route path="/about" element={<About/>}/>
       </Routes>
       </BrowserRouter>
      
    </div>
  
  )
}
export default App
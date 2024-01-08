
import './App.css'
import Enterdata from './SchoolBase/Enterdata'
import {Route ,Routes} from 'react-router-dom'
import Viewdata from './SchoolBase/Viewdata'
function App() {
  return (
    <div style={{backgroundColor:"lightblue", height:"100vh"}}>
     <Routes>
      <Route path="/" element={<Enterdata/>}/>
      <Route path="/view" element={<Viewdata/>}/>
      
     </Routes>
    </div>
  )
}

export default App

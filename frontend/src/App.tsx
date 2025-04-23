import './App.css' 
import { Dashboard } from './pages/dashboard'
import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import { Signup } from './pages/signup'
import {Signin} from "./pages/signin"


function App() { 
  return ( 
    <BrowserRouter>
      <Routes >
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route> 
        <Route path='/dashboard' element={<Dashboard/>}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App

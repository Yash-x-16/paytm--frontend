import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { InputC } from './components/inputC' 
import { UserIcon } from './icons/userIcon'
import { PasswordC } from './components/password'
function App() {
 
  return (<div>
    <InputC type='placeholder' label='USERNAME' startIcon={<UserIcon size='sm'/>} endIcon={<UserIcon size="sm"/>}></InputC>
   <PasswordC/>
    </div>
  )
}

export default App

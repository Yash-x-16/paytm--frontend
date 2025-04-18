import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { InputC } from './components/inputC' 
import { UserIcon } from './icons/userIcon'

function App() {
 
  return (<div>
    <InputC type='placeholder' label='USERNAME' startIcon={<UserIcon size='sm'/>} endIcon={<UserIcon size="sm"/>}></InputC>
    <InputC type='placeholder' label='firstname' startIcon={<UserIcon size='sm'/>} endIcon={<UserIcon size="sm"/>}></InputC>
    <InputC type='placeholder' label='lastname' startIcon={<UserIcon size='sm'/>} endIcon={<UserIcon size="sm"/>}></InputC>
    <InputC type='password' label='password' startIcon={<UserIcon size='sm'/>} endIcon={<UserIcon size="sm"/>}></InputC>
    </div>
  )
}

export default App

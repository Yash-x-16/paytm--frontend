import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css' 
import { UserIcon } from './icons/userIcon'
import { Button } from './components/button'
import { Signup } from './pages/signup' 
import { SendIcon,RecieveIcon } from './icons/sendIcon' 
import { BGbutton } from './components/bgbutton'
function App() {
 
  return (<div>
    <Button text={"Button"} variant='primary' size='sm'onStart={<UserIcon size='md'/>} />
    <Button text={"Signin"} variant='primary' size='sm'onStart={<UserIcon size='md'/>}/>
    <Button text={"Create Free Account"} variant='primary' size='md'onEnd={<UserIcon size='md'/>}/>
    <Button text={"Create"} variant='secondary' size='md'/>
    <BGbutton variant='primary' size='lg' text='Send Money' onStart={<SendIcon/>}/>
    <BGbutton variant='primary' size='lg' text='Recieve Money' onStart={<RecieveIcon/>}/>
  </div>
    
  )
}

export default App

import { WalletIcon } from "../icons/walletIcon"
import { InputC } from "../components/inputC" 
import { NameIcon } from "../icons/nameIcon"
import { PasswordC } from "../components/password" 
import { UserIcon } from "../icons/userIcon"
export function Signup(){
    return <div className="bg-gradient-to-br flex justify-center items-center from-gray-900 to-blue-900 h-screen w-screen">
                <div className="bg-gray-800 max-h-max w-1/3 rounded-2xl flex flex-col border border-gray-700">
                    <div className=" text-blue-500  pl-44 pt-10">
                        <WalletIcon />
                    </div>  
                        <h1 className=" flex text-white pt-3 font-bold font-sans text-3xl pl-28">
                            Create Account 
                        </h1>
                        <span className="text-gray-400 pt-2 pl-12">
                            Join thousands of users managing their finance
                        </span>  
                        <div className="pl-3 pt-3 ">
                            <InputC type="text" label="Username" startIcon={<UserIcon size="md"/>}/>
                        </div>
                        <div className="pl-3">
                            <PasswordC/>    
                        </div>   
                        <div className="pl-3 ">
                            <InputC type="text" label="Firstname" startIcon={<NameIcon/>}/>
                        </div>    
                        <div className="pl-3 ">
                            <InputC type="text" label="Lastname" startIcon={<NameIcon/>}/>
                        </div>                
                </div>
    </div>
}
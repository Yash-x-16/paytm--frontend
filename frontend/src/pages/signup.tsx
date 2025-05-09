import { WalletIcon } from "../icons/walletIcon"
import { InputC } from "../components/inputC" 
import { NameIcon } from "../icons/nameIcon"
import { PasswordC } from "../components/password" 
import { UserIcon } from "../icons/userIcon" 
import { Button } from "../components/button"
import { BGbutton } from "../components/bgbutton"

export function Signup(){
    return <div className="bg-gradient-to-br flex justify-center items-center from-gray-900 to-blue-900 h-screen w-screen">
                <div className="bg-gray-800 max-h-max w-1/3 rounded-2xl flex flex-col border border-gray-700 m-auto">
                    <div className=" text-blue-500  pl-44 pt-10">
                        <WalletIcon size="xl"/>
                    </div>  
                        <h1 className=" flex text-white pt-3 font-bold font-sans text-3xl pl-28">
                            Create Account 
                        </h1>
                        <span className="text-gray-400 pt-2 pl-12">
                            Join thousands of users managing their finance
                        </span>  
                        <div className="pl-3 pt-3 pr-3 text-gray-400">
                            <InputC type="text" label="Username" startIcon={<UserIcon />}/>
                        </div>
                        <div className="pl-3 pr-3">
                            <PasswordC/>    
                        </div>   
                        <div className="pl-3 pr-3">
                            <InputC type="text" label="Firstname" startIcon={<NameIcon/>}/>
                        </div>    
                        <div className="pl-3 pr-3">
                            <InputC type="text" label="Lastname" startIcon={<NameIcon/>}/>
                        </div>                  
                            <BGbutton size="lg" variant="primary" text="Create Account" />  
                            <hr className="border-t border-slate-700 m-3"/>
                            <span className="text-gray-400 text-center text-sm mb-5">
                                Already have an account ? <a href="#blank" className="text-blue-500">
                                    Sign in
                                </a>
                            </span>
                </div>
    </div>
}
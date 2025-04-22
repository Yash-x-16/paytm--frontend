import { WalletIcon } from "../icons/walletIcon"
import { Button } from "./button" 
import { PowerIcon } from "../icons/powerIcon"

export function Navbar (){
    return <div >
        <div className="w-screen bg-slate-800 h-20 text-white flex justify-between items-center "> 
            <div className="flex  pl-14 justify-start ">
                <WalletIcon size="lg3" color={"text-blue-500"}/> 
                <span className=" text-center pl-2 pt-1 text-2xl font-bold">
                    PayFlow
                </span>
            </div>
                <div className="pr-14">
                    <Button variant="primary" size="sm" text="Logout" onStart={<PowerIcon/>}/>
                </div>
        </div> 

    </div>
}
import { Navbar } from "../components/navbar" 
import SearchInput from "../components/newinput" 
import { BGbutton } from "../components/bgbutton" 
import { Arrow } from "../icons/arrow"
import { SendIcon } from "../icons/sendIcon"
export function Dashboard (){
    return <div className="bg-gray-900 h-screen w-screen flex flex-col"> 
        <div >  
            <Navbar/>
        </div> 
        <div className=" text-white text-center">
            <h1 className="text-5xl font-semibold pt-16 pb-4">
                Send Money Instantly
            </h1> 
            <span className="text-gray-400 text-xl">
                Transfer money to anywhere, anytime, anyone.
            </span>
        </div>  
        <div className="mt-16 h-max bg-slate-800 w-2/4 rounded-md m-auto"> 
            <div className="p-2">
                <SearchInput/>
            </div>
            
              <div className="flex justify-center pb-5 ">
                    <BGbutton variant="primary" text= "SendMoney" size="xl" onStart={<SendIcon/>}/>
            </div> 
        </div>
      
        
    </div>
}
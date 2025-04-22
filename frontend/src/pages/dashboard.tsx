import { Navbar } from "../components/navbar"
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
        
        
    </div>
}
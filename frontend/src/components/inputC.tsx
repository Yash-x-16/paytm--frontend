import { ReactElement, Ref } from "react";
import { UserIcon } from "../icons/userIcon";

interface input{
    type :string ,
    label : string , 
    startIcon?:ReactElement,
refrence? : Ref<HTMLInputElement> , 
endIcon? :ReactElement 
}


export function InputC(prop:input){
    return <div className="h-12 w-auto  bg-slate-500 flex rounded-md m-2 justify-start  border-gray-400  hover:border-blue-700 border-2" > 
        <div className="pt-3 pl-2 rounded-md  ">
            {prop.startIcon}
            </div> 
            <div className="bg-inherit pt-3 pl-2 rounded-md text-gray-100 ">
                    <input type={prop.type}  
                        placeholder={prop.label}  
                        ref={prop.refrence} 
                        className=" bg-inherit focus:outline-none "/>
            </div>
    </div>
}
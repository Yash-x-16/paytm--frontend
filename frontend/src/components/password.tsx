import { ReactElement, Ref } from "react";
import { LockIcon } from "../icons/lockIcons"; 
import { EyeIcon } from "../icons/eyeIcon";


interface input{
    type ?:string ,
refrence? : Ref<HTMLInputElement> , 
endIcon? :ReactElement 
}


export function PasswordC(prop:input){
    return (
  <div className="flex justify-start bg-slate-500 rounded-md m-7 h-12 w-10">
    {/* Lock Icon */}
    <div className="text-white pt-3  pl-2">
      <LockIcon />
    </div>

    {/* Input Field */}
    <input
      type={prop.type}
      placeholder="PASSWORD"
      ref={prop.refrence}
      className="bg-inherit  focus:outline-none w-40 inline-block pl-2"
    />

    {/* Eye Icon */}
    <button type="button" className=" pr-2 bg-inherit pt-3 mr-3 inline-flex ">
      <EyeIcon />
    </button>
  </div>
);

}
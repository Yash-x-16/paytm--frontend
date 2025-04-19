import { ReactElement, Ref, useState } from "react";
import { LockIcon } from "../icons/lockIcons"; 
import { EyeIcon,ClosedEye } from "../icons/eyeIcon";


interface input{
    type ?:string ,
refrence? : Ref<HTMLInputElement> , 
endIcon? :ReactElement 
}
 

export function PasswordC(prop:input){ 
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");

    const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };



    return (
  <div className="flex justify-start bg-slate-500 rounded-md m-2 h-12 w-auto border-gray-400  hover:border-blue-700 border-2" >
    {/* Lock Icon */}
    <div className="text-white pt-3  pl-2">
      <LockIcon />
    </div>

    {/* Input Field */}
    <input
     type={visible ? "text" : "password"}
      placeholder="PASSWORD"
      onChange={handleChange}
      ref={prop.refrence}
      className="bg-inherit  focus:outline-none w-40 inline-block pl-2 text-white"
    />


    <button type="button"
       onClick={toggleVisibility} 
       className="  bg-inherit pt-4 ml-40 text-gray-400 inline-flex rounded-r-md">
        {visible ? <ClosedEye /> : <EyeIcon />}
    </button>  
  </div>
);

}
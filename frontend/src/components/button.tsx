type variants = "primary" | "secondary"
interface ButtonProp{
    variant : variants , 
    size : "md" | "sm" | "lg" , 
    text : string , 
    onclick ?: ()=>void, 
    onStart ?: any , 
    onEnd ?: any ,  
    fullwidth?: boolean  ,
    loading?:boolean
} 
 
const variantStyle = {
      "primary": "bg-blue-500 text-white font-normal ", 
    "secondary": "bg-slate-800 text-white"
} 
const sizeStyle = {
    "sm" : "py-2 px-4  rounded-md flex-item-center m-7 w-28 text-lg",
    "md":"py-2 px-4 rounded-md flex-item-center m-7 w-56 text-center text-lg", 
    "lg" : "py-2 px-4 w-64 m-7 rounded-md flex  text-center", 
} 

const DefaulStyles = "rounded-md flex font-light "
export const Button =(props:ButtonProp)=>{
    return <button onClick={props.onclick} className={`${variantStyle[props.variant]} ${DefaulStyles} ${props.fullwidth?" w-full flex justify-center items-center text-center":""}${sizeStyle[props.size]} ${props.loading?"opacity-45 ":""}` }>
 {props.onStart?<div className="pr-2 py-1 inline-block text-white">{props.onStart}</div>:null} <span className="m-auto">{props.text}</span>{props.onEnd?<div className="pl-2 py-1">{props.onEnd}</div>:null}</button>
}
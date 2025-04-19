type variants = "primary" | "secondary"
interface ButtonProp{
    variant : variants , 
    size : "lg" , 
    text : string , 
    onclick ?: ()=>void, 
    onStart ?: any ,  
    loading?:boolean
} 
 
const variantStyle = {
      "primary": "bg-blue-500 text-white font-normal ", 
    "secondary": "bg-slate-800 text-white"
} 
const sizeStyle = {
    "lg" : "py-2 px-4 w-64 m-7 rounded-md flex text-lg text-center", 
} 

const DefaulStyles = "rounded-md flex font-light "
export const BGbutton =(props:ButtonProp)=>{
    return <button onClick={props.onclick} className={`${variantStyle[props.variant]} ${DefaulStyles} ${sizeStyle[props.size]} ${props.loading?"opacity-45 ":""}` }>
 {props.onStart?<div className=" pl-10 pr-3 py-1 inline-block text-white">{props.onStart}</div>:null} <span className=" inline-block">{props.text}</span></button>
}
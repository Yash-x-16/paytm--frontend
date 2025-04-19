type variants = "primary" | "secondary"
interface ButtonProp{
    variant : variants , 
    size : "lg" |"xl"|"2xl", 
    text : string , 
    onclick ?: ()=>void, 
    onStart ?: any , 
    onEnd ?: any ,  
    fullwidth?: boolean  ,
    loading?:boolean
} 
 
const variantStyle = {
      "primary": "bg-blue-600 text-white font-normal ", 
    "secondary": "bg-slate-800 text-white"
} 
const sizeStyle = {
    "lg" : "py-2 px-4 w-auto text-lg  rounded-md flex  text-center",  
    "xl" :"py-2 px-4 max-w-sm text-lg m-5 rounded-md flex  text-center",
    "2xl" :""
} 

const DefaulStyles = "rounded-md flex font-light "



export const BGbutton =(props:ButtonProp)=>{
    return <button onClick={props.onclick} className={`${variantStyle[props.variant]} ${DefaulStyles} ${props.fullwidth?" w-full flex justify-center items-center text-center":""}${sizeStyle[props.size]} ${props.loading?"opacity-45 ":""}` }>
 {props.onStart?<div className="pr-2 pl-10 py-1 inline-block text-white">{props.onStart}</div>:null} <span className="m-auto">{props.text}</span>{props.onEnd?<div className="pl-2 py-1">{props.onEnd}</div>:null}</button>
}
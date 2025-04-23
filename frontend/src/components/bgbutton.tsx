type variants = "primary" | "secondary" |"tertiary"
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
    "secondary": "bg-slate-800 text-white",
    "tertiary" : "bg-green-500 text-white font-normal"
} 
const sizeStyle = {
    "lg" : "py-2 px-4 w-auto text-lg  rounded-md   m-5 max-w-full justify-center",  
    "xl" :"py-3 px-4 w-full max-w-full text-lg  rounded-md flex text-center  m-2",
    "2xl" :""
} 

const DefaulStyles = "rounded-md flex font-light  "



export const BGbutton =(props:ButtonProp)=>{
    return <button onClick={props.onclick} className={`${variantStyle[props.variant]} ${DefaulStyles} ${props.fullwidth?" w-full flex justify-center items-center text-center":""}${sizeStyle[props.size]} ${props.loading?"opacity-45 ":""}` }>
 {props.onStart?<div className="  py-1  text-white">{props.onStart}</div>:null} <span className="text-center">{props.text}</span>{props.onEnd?<div className="pl-2 py-1">{props.onEnd}</div>:null}</button>
}
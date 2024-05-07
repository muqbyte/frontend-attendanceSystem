import React from "react";
import DropDown from "./DropDown";
import ClassDropDown from "./ClassDropDown";

export const Input=(props)=>{
    const {label, type, id, name,onCaps}=props
    return(
                <div className="flex flex-row ">
                    {/* <label className="flex-1 font-sans text-lg font-semibold">{label}</label> */}
                    <input className="flex-1 border-2 rounded-md" type={type} id={id} name={name} placeholder={label} onChange={onCaps}></input>
                </div>
    )
}

export const InputDropDown=(props)=>{
    const {label,category}=props
    return(
                <div className="flex flex-row">
                    {/* <label className="flex-1 font-sans text-lg font-semibold" >{label}</label> */}
                    {/* <DropDown  selectedOption={choice} onOptionChange={onOptionChange} /> */}
                    <DropDown />
                </div>
    )
}

export const DropDownClass=(props)=>{
    const {label}=props
    return(
                <div className="flex flex-row">
                    {/* <label className="flex-1 font-sans text-lg font-semibold" >{label}</label> */}
                    {/* <DropDown  selectedOption={choice} onOptionChange={onOptionChange} /> */}
                    <ClassDropDown />
                </div>
    )
}


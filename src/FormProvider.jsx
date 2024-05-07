import React, {useContext, useState} from "react";

import { SelectedOptionContext } from "./InputFormContext";
import DropDown from "./component/DropDown";

export const InputDropDown = ({ label }) => {
    const { selectedOption, setSelectedOption } = useContext(SelectedOptionContext);
  
    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div className="flex flex-row">
        <label className="flex-1 font-sans text-lg font-semibold">{label}</label>
        {/* <DropDown selectedOption={selectedOption} onOptionChange={handleOptionChange} /> */}
        <DropDown selectedOption={selectedOption} onOptionChange={handleOptionChange}/>
      </div>
    );
  };

  export const Input=(props)=>{
    const {label, type, id, name}=props
    return(
                <div className="flex flex-row">
                    <label className="flex-1 font-sans text-lg font-semibold">{label}</label>
                    <input className="flex-1 border-2 rounded-md" type={type} id={id} name={name}></input>
                </div>
    )
}
  
 
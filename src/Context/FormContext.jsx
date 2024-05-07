import React, {createContext, useState} from "react";

export const DropDownContext=createContext();

export const FormProvider=({children})=>{

    const [selectedOption, setSelectedOption]= useState(null)
    const [selectedClass, setSelectedClass]= useState(null)
    const [isOpen, setIsOpen]=useState(false)
    const [isClassOpen, setClassOpen]=useState(false)

    const toggleDropdown=()=>{
        setIsOpen(!isOpen)//not false= true
    }
    const toggleClass=()=>{
        setClassOpen(!isClassOpen)//not false= true
    }

    const handleOptionClick=(option)=>{
        setSelectedOption(option)
        toggleDropdown();
    }

    const handleClass=(option)=>{
        setSelectedClass(option)
        toggleClass();
    }

    return(
        <DropDownContext.Provider value={{selectedOption, isOpen,handleOptionClick, toggleDropdown, handleClass, selectedClass,toggleClass,isClassOpen}}>
            {children}
        </DropDownContext.Provider>
    )

}
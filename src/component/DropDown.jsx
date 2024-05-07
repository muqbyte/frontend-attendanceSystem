import React, { useState, useContext, useEffect } from "react";
import {DropDownContext} from "../Context/FormContext";
import useGet from "../hooks/useGet";


const DropDown = () => {

  const { selectedOption, isOpen, toggleDropdown, handleOptionClick} =useContext(DropDownContext);
  const [courseSelected, setCourseSelected]=useState([])

  const {getData, response}=useGet();

  const fetchCourseData =() => {
    getData("url/classCourseGet")
    if(response && response.length>0){
      setCourseSelected(response)
    }
  };

  useEffect(()=>{
    fetchCourseData()
    // console.log(response)
  },[response])
  
  return (
    <div className="relative inline-block" >
      <button
        id="dropdownDefaultButton"
        className="text-white w-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        style={{ top: "calc(100% + 0.5rem)", minWidth: "10rem"}}
        type="button"
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption : "Choose Course"}
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="absolute left-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          style={{ top: "calc(100% + 0.5rem)" }}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {courseSelected.map((value)=>{
              return(
              <li key={value.id}>
                <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => handleOptionClick(value.course)} 
              >
                {value.course}
              </a>
              </li>)
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;



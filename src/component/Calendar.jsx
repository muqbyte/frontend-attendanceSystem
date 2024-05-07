import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { QueryContext } from "../Context/QueryContext";
import { CiCalendar } from "react-icons/ci";

const Calendar = () => {
  const [fullDate, setFullDate]= useState("")
  const {updateDate,handleDateSelect, startDate}=useContext(QueryContext)
  

  return (
    <div className="flex flex-row items-center justify-center border-2" style={{backgroundColor:"white"}}>
        <DatePicker 
          selected={startDate} 
          onChange={handleDateSelect} 
          dateFormat="dd/MM/yyyy" 
        />
     
      <CiCalendar size={30}/>
    </div>
  );
};

export default Calendar;

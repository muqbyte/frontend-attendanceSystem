import React, {useState, createContext, useEffect} from "react";


export const QueryContext=createContext();

export const QueryDB =({children})=>{
    const [startDate, setStartDate] = useState(new Date());
    const [updateDate, setUpdateDate]=useState("")


    const handleDateSelect = (date) => {
        setStartDate(date)
        console.log("Selected Date:", date);
        console.log("Day:", date.getDate());
        console.log("Month:", date.getMonth() + 1); // Months are zero-indexed, so we add 1
        console.log("Year:", date.getFullYear());
        
        const year=date.getFullYear();
        const month=date.getMonth() + 1;
        const currentDate=date.getDate();
        const updatedDate = `${year}-${month}-${currentDate}`; // Update updateDate state
        setUpdateDate(updatedDate);

        console.log(updateDate)
      }
    

    return(
        <QueryContext.Provider value={{updateDate, handleDateSelect, startDate}}>
            {children}
        </QueryContext.Provider>
    )
}
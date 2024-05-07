import React, { useState,useContext,useEffect } from "react";
import FormLayout from "../../Layout/FormLayout/FormLayout";
import { DropDownClass, Input, InputDropDown } from "../../component/Input";
import Calendar from "../../component/Calendar";
import Button from "../../component/Button";
import { QueryContext } from "../../Context/QueryContext";
import { DropDownContext } from "../../Context/FormContext";
import axios from "axios";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


const LecturerForm=()=>{
    const {updateDate}= useContext(QueryContext);
    const [allData, setAllData]=useState([])
    const { selectedOption, selectedClass } = useContext(DropDownContext);
    const handleSubmit=async(event)=>{
        event.preventDefault(); // Prevent default form submission behavior
       
        const formData = {
            date:updateDate,
            course:selectedOption,
            classRegistration:selectedClass
        };
        console.log(formData)

        try {
            const sendData=await axios.post("url/staff", formData)
            console.log("Success")
            const temporary=sendData.data.data[0]
            console.log(sendData.data.data[0])
            setAllData(temporary)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        console.log("allData",allData)
        if(allData.length > 0){
            const worksheet = XLSX.utils.json_to_sheet(allData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    
            // Buffer to store the generated Excel file
            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    
            saveAs(blob, "exportedData.xlsx");
        }
    },[allData])

    return(
        <div className="w-2/5 p-4">
        <form className="flex flex-row items-center justify-center gap-4" onSubmit={handleSubmit}>
            <InputDropDown label="LECTURER"/>
            <DropDownClass label="CLASS"/>
            <Calendar/>
            <Button type="submit"/>
        </form>
    </div>
    )
}

export default LecturerForm;



// InputForm.js
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { DropDownContext } from "../../Context/FormContext";
import usePost from "../../hooks/usePost";
import { DropDownClass, Input, InputDropDown } from "../../component/Input";
import Button from "../../component/Button";

const InputForm = () => {
    const { selectedOption, selectedClass } = useContext(DropDownContext);
    const { postData, response } = usePost();
    const [formData, setFormData] = useState({
        lecturerName: "",
        name: "",
        studentID: "",
        classRegistration: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const updatedFormData = {
            course: selectedOption,
            // name: event.target.name.value,
            studentID: event.target.studentID.value,
            classRegistration: selectedClass
        };
        setFormData(updatedFormData);
        console.log("update",updatedFormData);

        // Call postData function from custom hook
        postData("url", updatedFormData);

    };
    
    useEffect(() => {
        if(response =="Success"){
             alert("Success")
             window.location.reload()
        }else if (response == "Error") {
         alert("Error");
     }
    }, [response]);
   

    return (
        <div className="p-4">
            <form className="flex flex-row items-center justify-center gap-4" onSubmit={handleSubmit}>
                <InputDropDown label="COURSE"/>
                <DropDownClass label="CLASS"/>
                {/* <Input label="NAME" type="text" id="name" name="name" /> */}
                <Input label="STUDENT ID" type="text" id="studentID" name="studentID" />
                <Button type="submit" />
            </form>
        </div>
    );
};

export default InputForm;

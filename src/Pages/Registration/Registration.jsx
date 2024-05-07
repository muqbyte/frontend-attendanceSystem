import React, { useEffect, useState } from "react";
import { Input } from "../../component/Input";
import Button from "../../component/Button";
import usePost from "../../hooks/usePost";

const Registration=()=>{
    const [registrationData, setRegistrationData] = useState({
        name: "",
        studentID: "",
    });
    const {postData, response}=usePost();

   
      

    const handleRegistration=async(event)=>{
        event.preventDefault();

        const updateRegistration={
            name:event.target.name.value.toUpperCase(),
            studentID:event.target.studentID.value
        }
       
        setRegistrationData(updateRegistration);
        console.log("registration",updateRegistration);
        postData("url/registration", updateRegistration);
    }
    useEffect(() => {
        if(response =="Success"){
             alert("Success")
             window.location.reload()
        }else if (response == "Error") {
         alert("Error");
     }
    }, [response]);
    return(
        <div>
            <div className="p-4">
                <form className="flex flex-row items-center justify-center gap-4" onSubmit={handleRegistration}>
                    <Input label="NAME" type="text" id="name" name="name"/>
                    <Input label="STUDENT ID" type="text" id="studentID" name="studentID" />
                    {/* <Input label="COURSE" type="text" id="Course" name="Course" /> */}
                    <Button type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Registration;
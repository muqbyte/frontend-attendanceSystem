import React, { useEffect, useState } from "react";
import { Input } from "../../component/Input";
import Button from "../../component/Button";
import usePost from "../../hooks/usePost";

const ClassCourse=()=>{
  
    const {postData, response}=usePost();

    const handleClassCourse=async(event)=>{
        event.preventDefault();

        const classCourseRegistration={
            classRegistration:event.target.class.value.toUpperCase(),
            course:event.target.course.value.toUpperCase()
        }
       
        // setRegistrationData(updateRegistration);
        console.log("registration",classCourseRegistration);
        postData("url/classCourse", classCourseRegistration);
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
                <form className="flex flex-row items-center justify-center gap-4" onSubmit={handleClassCourse}>
                    <Input label="Class" type="text" id="class" name="class" />
                    <Input label="Course" type="text" id="course" name="course" />
                    {/* <Input label="COURSE" type="text" id="Course" name="Course" /> */}
                    <Button type="submit" />
                </form>
            </div>
        </div>
    )
}

export default ClassCourse;
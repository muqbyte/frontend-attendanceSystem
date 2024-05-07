import React, { useState } from "react";
import HomeLayout from "../../Layout/HomeLayout/HomeLayout";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SideBar from "../../component/SideBar";
import Registration from "../Registration/Registration";
import LecturerForm from "./LecturerForm";
import LecturerPages from "./LecturerPages";
import ClassCourse from "./ClassCourseForm";
import Example from "../../component/Example";

const Staff = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handlePageAttendance = () => {
        navigate("/attendance");
    };

    const handlePageStaff = () => {
        navigate("/staff");
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <HomeLayout>
            <div className="flex flex-row">
                
                <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                <div style={{ marginLeft: isSidebarOpen ? "300px" : "180px", display:"flex", flexDirection:"column", gap:20, marginTop:20,  width:"70vw"}}>
                    
                        <div>
                            <h1 className="text-5xl text-white">STAFF PAGES</h1>
                        </div>

                        <div>
                            <ClassCourse/>
                        </div>
                    
                    <div className="flex flex-col justify-center gap-4 p-2"> 
                        <div>
                            <p className="text-xl text-white">This is for the lecturer to download the student attendance</p>
                        </div>

                        <div>
                            <p className="text-xl text-white">Please choose the course, class and date. The attendance will automatically download in excel file</p>
                        </div>

                        <LecturerPages />
                        {/* <Example/> */}
                    </div>

                </div>
            </div>
        </HomeLayout>
    );
};

export default Staff;

import React, { useState } from "react";
import HomeLayout from "../../Layout/HomeLayout/HomeLayout";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SideBar from "../../component/SideBar";

import Registration from "../Registration/Registration";
import FormPages from "../../Forms/LecturerForm/Index";

const Home = () => {
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
                            <h1 className="text-5xl text-white">STUDENT ATTENDANCE</h1>
                        </div>
                    <div>
                        <div>
                            <p className="text-2xl text-white">Please register for first time user</p>
                        </div>
                        <div>
                            <p className="text-lg text-white">Please fill in the information below to register</p>
                        </div>
                        <Registration/>
                    </div>
                    
                    <div className="flex flex-col justify-center gap-4 p-2">
                        <div >
                            <p className="text-2xl text-white">Please submit your attendance</p>
                        </div>
                        
                        <FormPages />
                    </div>

                </div>
            </div>
        </HomeLayout>
    );
};

export default Home;

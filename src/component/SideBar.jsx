import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlinePeople, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Eagle from "../assets/Eagle.png";

const SideBar = ({ isOpen, toggleSidebar }) => {
    const navigate = useNavigate();

    const handlePageAttendance = () => {
        navigate("/");
    };

    const handlePageStaff = () => {
        navigate("/staff");
    };

    return (
        <>
            <button
                className={`fixed z-50 p-3 text-white bg-gray-800 rounded-full top-6  ${isOpen ? "left-56" : "left-28"}`}
                onClick={toggleSidebar}
            >
                {isOpen ? <MdOutlineKeyboardDoubleArrowLeft size={30} /> : <MdOutlineKeyboardDoubleArrowRight size={30} />}
            </button>

            <aside
                className={`fixed top-0 left-0 z-40 w-36 h-screen text-white bg-gray-800 ${
                    isOpen ? "transition-all duration-300 ease-in-out w-64" : "overflow-hidden"
                }`}
            >
                <div className="h-full px-4 py-4 mt-8">
                    <ul className="space-y-2 font-medium">
                        <li className="flex flex-row items-center justify-center" onClick={handlePageStaff}>
                            <FaChalkboardTeacher size={50} color="white" />
                        </li>
                        <li className="flex flex-row items-center justify-center" onClick={handlePageAttendance}>
                            <MdOutlinePeople size={50} color="white" />
                        </li>
                    </ul>
                </div>
            </aside>

            {isOpen && (
                <aside className="fixed top-0 left-0 z-40 w-64 h-screen text-white bg-gray-800">
                    <div className="flex flex-row items-center justify-center mt-6">
                        <img src={Eagle} alt="Eagle Logo" />
                    </div>
                    <div className="h-full px-4 py-4">
                        <ul className="space-y-2 font-medium">
                            <li className="flex flex-row items-center" onClick={handlePageStaff}>
                                <FaChalkboardTeacher size={50} color="white" />
                                <span className="ms-3">Staff Page</span>
                            </li>
                            <li className="flex flex-row items-center" onClick={handlePageAttendance}>
                                <MdOutlinePeople size={50} color="white" />
                                <span className="ms-3">Student Page</span>
                            </li>
                        </ul>
                    </div>
                </aside>
            )}
        </>
    );
};

export default SideBar;

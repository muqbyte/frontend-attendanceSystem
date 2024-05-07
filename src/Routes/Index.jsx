import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
    Route,
    Routes,
    Link,
    BrowserRouter,
    useNavigate,
  } from "react-router-dom";
import Home from "../Pages/Home/Index";
import Staff from "../Pages/LecturerPages/Index";

  const AppRoutes=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home />} />
                {/* <Route  path="/attendance" element={<FormPages />} /> */}
                <Route  path="/staff" element={<Staff />} />
            </Routes>
        </BrowserRouter>
    )
  }

  export default AppRoutes;

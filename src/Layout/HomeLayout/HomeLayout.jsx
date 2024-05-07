import React from "react";

const HomeLayout=({children})=>{
    return(
        <div className="relative flex flex-row h-screen" style={{backgroundColor:"#31363F"}}>
            {children}
        </div>
    )
}

export default HomeLayout;
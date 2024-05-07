import React from "react";

const FormLayout=({children})=>{
    return(
        <div className="flex flex-row items-center justify-center">
            {children}
        </div>
    )
}

export default FormLayout;
import React from "react";
import FormLayout from "../../Layout/FormLayout/FormLayout";
import LecturerForm from "./LecturerForm";
import { QueryDB } from "../../Context/QueryContext";
import { FormProvider } from "../../Context/FormContext";

const LecturerPages=()=>{
    return(
        <QueryDB>
            <FormProvider>
                <FormLayout>
                    <LecturerForm/>
                </FormLayout>  
            </FormProvider>
        </QueryDB>
        
    )
}

export default LecturerPages;
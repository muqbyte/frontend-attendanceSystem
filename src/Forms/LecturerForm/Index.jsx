import React from "react";
import { FormProvider } from "../../Context/FormContext";
import FormLayout from "../../Layout/FormLayout/FormLayout";
import InputForm from "./InputForm";



const FormPages=()=>{
    return(
        <FormProvider>
            <FormLayout>
                <InputForm/>
            </FormLayout>
        </FormProvider>
    
    )
}

export default FormPages;
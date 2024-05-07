// usePost.js
import { useState, useEffect } from "react";
import axios from "axios";

const usePost = () => {
    const [response, setResponse] = useState(null);

    const postData = async (url, data) => {
        try {
            const sendData = await axios.post(url, data);
            const outCome="Success"
            setResponse(outCome);
            // console.log("testing", response);
        } catch (error) {
            console.log(error);
            const outCome="Failed"
            setResponse(outCome);
        }
    };
    useEffect(() => {
        // console.log("Response updated:", response);
    }, [response]);

    return {postData, response};
};

export default usePost;

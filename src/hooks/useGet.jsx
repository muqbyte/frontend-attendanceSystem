// usePost.js
import { useState, useEffect } from "react";


const useGet = () => {
    const [response, setResponse] = useState(null);

    const getData = async (url) => {
        try {
            const classCourseQuery = await fetch(url);
            const data = await classCourseQuery.json();
            const newData=data.data[0]
            setResponse(newData);
            // console.log("testing", response);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        // console.log("Response updated:", response);
    }, [response]);

    return {getData, response};
};

export default useGet;
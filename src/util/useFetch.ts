
import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                const data = response.data;
                setData(data);
            } catch (error){
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return {data, loading, error};
}

export default useFetch;
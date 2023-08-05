import { useEffect,useState } from "react";

const fetchApi =(...args)=>{

    const [errors, setErrors] = useState();
    const [data, setData] = useState();
    const [loading, setLoading] = useState();

    let url = args[0];
    let params = args[1];    
    let payLoad = args[2];

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(data => data.json())
            .then(({ statusCode, status, ...data }) => {
                if (statusCode === 404) {
                    const errors = [data.message];
                    // errorHandler(errors);
                    setErrors(errors);
                } else {
                    setData(data);
                }
            })
            .catch(e => {
                setErrors([e])
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])
    
    return { errors, data, loading }

}

export {fetchApi};
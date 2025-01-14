import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then((res) => {
                   
                    if (!res.ok) {
                        throw Error('can"t fetch this data');
                    }
                    return res.json();
                })
                .then((Data) => {
                    setData(Data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name === 'AbortError') {
                        console.log('fetch Aborted');
                    }else{
                        setIsPending(false);
                        setError(err.message);
                    }
                   
                });
        }, 1000);


        return () => abortCont.abort();
}, [url]);


    return { data, isPending, error };
};

export default useFetch;

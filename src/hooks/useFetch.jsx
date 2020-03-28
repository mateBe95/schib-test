import {useEffect, useState} from "react";


function useFetch(url) {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getFetchUrl() {
            const response = await fetch(url);
            const json = await response.json();

            setData(json);
            setLoading(false);
        }

        getFetchUrl();
    }, [url]);

    return {data, loading};
}

export {useFetch}
import { useEffect, useState } from 'react';

export default function useFetch(url, method, headers) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        async function reqestFetch() {
            try {
                setLoading(true);
                setError(false);

                const response = await fetch(url, {
                    mode: 'no-cors',
                    method: method || 'GET',
                    headers
                });

                const data = await response.json();
                setLoading(false);
                setResult(data);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        reqestFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        loading,
        error,
        result
    };
}

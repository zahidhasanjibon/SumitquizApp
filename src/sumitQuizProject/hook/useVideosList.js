import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVideosList(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        async function fetchVideos() {
            const db = getDatabase();
            const videosRef = ref(db, 'videos');
            const videoQuery = query(videosRef, orderByKey(), startAt(`${page}`), limitToFirst(8));

            try {
                setLoading(true);
                setError(false);
                const snapshot = await get(videoQuery);
                console.log(snapshot.val());
                setLoading(false);
                if (snapshot.exists()) {
                    setVideos((prevVideos) => [...prevVideos, ...Object.values(snapshot.val())]);
                } else {
                    setHasMore(false);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(false);
            }
        }
        setTimeout(() => {
            fetchVideos();
        }, 1000);
    }, [page]);

    return {
        loading,
        error,
        videos,
        hasMore
    };
}

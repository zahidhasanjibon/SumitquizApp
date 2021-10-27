import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useQuestions(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            const db = getDatabase();
            const quizRef = ref(db, `quiz/${videoID}/questions`);
            const quizQuery = query(quizRef, orderByKey());

            try {
                setLoading(true);
                setError(false);
                const snapshot = await get(quizQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setQestions((prev) => [...prev, ...Object.values(snapshot.val())]);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(false);
            }
        }

        fetchQuestions();
    }, [videoID]);

    return {
        loading,
        error,
        questions
    };
}

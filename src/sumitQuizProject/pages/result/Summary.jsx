import { useMemo } from 'react';
import useFetch from '../../hook/useFetch';
import imagesrc from '../../images/success.png';
import classes from '../../style/Summary.module.css';

export default function Summary({ score, noq }) {
    const getKeyword = useMemo(() => {
        if ((score / (noq * 5)) * 100 < 50) {
            return 'failed';
        }
        if ((score / (noq * 5)) * 100 < 75) {
            return 'good';
        }
        if ((score / (noq * 5)) * 100 < 100) {
            return 'verygood';
        }
        return 'excellent';
    }, [score, noq]);

    const { loading } = useFetch(
        `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
        'GET',
        {
            Authorization: process.env.REACT_APP_PEXELS_API_KEY
        }
    );

    // const image = result ? result.photos[0].src.medium : imagesrc;

    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                <p className={classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>
            {loading && <div className={classes.badge}>Loading your badge .....</div>}

            {!loading && (
                <div className={classes.badge}>
                    <img src={imagesrc} alt="Success" />
                </div>
            )}
        </div>
    );
}

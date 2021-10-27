import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NavLink } from 'react-router-dom';
import useVideosList from '../../hook/useVideosList';
import Card from './Card';
import cls from './Home.module.css';

const Home = () => {
    const [page, setPage] = useState(1);
    const { videos, loading, error, hasMore } = useVideosList(page);

    return (
        <>
            <div className={cls.container}>
                <div className={cls.card_container}>
                    {videos.length > 0 && (
                        <InfiniteScroll
                            dataLength={videos.length}
                            hasMore={hasMore}
                            loader="Loading ..."
                            next={() => setPage(page + 8)}
                        >
                            {videos.map((video) =>
                                video.noq > 0 ? (
                                    <NavLink
                                        to={{
                                            pathname: `/quiz/${video.youtubeID}`,
                                            state: {
                                                videoTitle: video.title
                                            }
                                        }}
                                        key={video.youtubeID}
                                    >
                                        <Card
                                            title={video.title}
                                            id={video.youtubeID}
                                            noq={video.noq}
                                        />
                                    </NavLink>
                                ) : (
                                    <Card
                                        key={video.youtubeID}
                                        title={video.title}
                                        id={video.youtubeID}
                                        noq={video.noq}
                                    />
                                )
                            )}
                        </InfiniteScroll>
                    )}
                    {!loading && videos.length === 0 && <div>! no data found</div>}
                    {error && <div>there was an error! </div>}
                    {loading && <div> Loading ...</div>}
                </div>
            </div>
        </>
    );
};
export default Home;

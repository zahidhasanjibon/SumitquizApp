import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import cls from '../../style/MiniPlayer.module.css';

export default function MiniPlayer({ id, title }) {
    const buttonRef = useRef();
    const [status, setStatus] = useState(false);

    const videoUrl = `https://www.youtube.com/watch?v=${id}`;

    function toogleMiniPlayer() {
        if (!status) {
            buttonRef.current.classList.remove(cls.floatingBtn);
            setStatus(true);
        } else {
            buttonRef.current.classList.add(cls.floatingBtn);
            setStatus(false);
        }
    }

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            className={`${cls.miniPlayer} ${cls.floatingBtn}`}
            ref={buttonRef}
            onClick={toogleMiniPlayer}
        >
            <span>
                {/* <i className={`material-icons ${cls.open}`}>play_arrow </i> */}
                <i className={`material-icons ${cls.open} `}>arrow_forward</i>
            </span>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <span className={`material-icons ${cls.close}`} onClick={toogleMiniPlayer}>
                close
            </span>
            <ReactPlayer
                url={videoUrl}
                playing={status}
                controls
                width="300px"
                height="170px"
                className={cls.player}
            />
            <p>{title}</p>
        </div>
    );
}

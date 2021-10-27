import { useRef, useState } from 'react';
import cls from '../../style/ProgressBar.module.css';
import Button from './Button';

export default function ProgressBar({ nextFunc, prevFunc, progress, submitFunc }) {
    const tooltipRef = useRef();
    const [tooltip, setTooltip] = useState(false);

    function toogleToolTip() {
        if (tooltip) {
            setTooltip(false);
            tooltipRef.current.style.display = 'none';
        } else {
            setTooltip(true);
            tooltipRef.current.style.display = 'block';
            tooltipRef.current.style.left = `calc(${progress}% -  65px)`;
        }
    }

    return (
        <div className={cls.progressBar}>
            <button type="button" className={cls.backButton} onClick={prevFunc}>
                <span>
                    <i className="material-icons">arrow_back</i>
                </span>
            </button>
            <div className={cls.rangeArea}>
                <div className={cls.tooltip} ref={tooltipRef}>
                    {progress}% Cimplete!
                </div>
                <div className={cls.rangeBody}>
                    <div
                        onMouseOver={toogleToolTip}
                        onMouseOut={toogleToolTip}
                        className={cls.progress}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <Button className={cls.next} onClick={progress === 100 ? submitFunc : nextFunc}>
                <span>{progress === 100 ? 'submit' : 'Next Question'}</span>
                <span>
                    <i className="material-icons">arrow_forward</i>
                </span>
            </Button>
        </div>
    );
}

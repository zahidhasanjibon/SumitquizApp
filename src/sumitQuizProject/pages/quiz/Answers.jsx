import { Fragment } from 'react';
import classes from '../../style/Answers.module.css';
import Checkbox from './Checkbox';

export default function Answers({ options = [], handleChange, input }) {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={index}>
                    {input ? (
                        <Checkbox
                            // eslint-disable-next-line react/no-array-index-key
                            key={new Date().getTime().toString() + index}
                            className={classes.answer}
                            text={option.title}
                            checked={option.checked}
                            value={index}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ) : (
                        <Checkbox
                            // eslint-disable-next-line react/no-array-index-key
                            key={new Date().getTime().toString() + index}
                            className={`${classes.answer} ${
                                // eslint-disable-next-line no-nested-ternary
                                option.correct
                                    ? classes.correct
                                    : option.checked
                                    ? classes.wrong
                                    : null
                            }`}
                            text={option.title}
                            defaultChecked={option.checked}
                            disabled
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
}

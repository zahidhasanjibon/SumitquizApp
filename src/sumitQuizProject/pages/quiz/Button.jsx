import cls from '../../style/Button.module.css';

export default function Button({ className, children, ...rest }) {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div className={`${cls.button} ${className}`} {...rest}>
            {children}
        </div>
    );
}

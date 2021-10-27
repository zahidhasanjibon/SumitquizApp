export default function Checkbox({ className, text, ...rest }) {
    return (
        <label className={className}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <input type="checkbox" {...rest} /> <span>{text}</span>
        </label>
    );
}

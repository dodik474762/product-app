

const Input = (props) => {
    const { type, id, placeholder, value } = props;
    return (
        <input
            type={type}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
            id={id}
            defaultValue={value}
            placeholder={placeholder}
        />
    );
}

export default Input;
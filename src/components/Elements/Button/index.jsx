const Button = (props) => {
  const { children, className, onClick = () => {}, type, style } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
      type={type}
      style={style}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};


export default Button;
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { type, name, title, placeholder } = props;
  return (
    <div className="mb-6">
      <Label title={title} htmlFor={name}></Label>
      <Input type={type} id={name} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;

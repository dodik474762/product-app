const OptionVal = {
    key: String,
    value: String
}

const Selects = (props) => {
  const { data = [], id } = props;
  return (
    <select
      name={id}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      {data.map((item, index) => {
        return (
          <option key={index} value={item.key}>
            {item.value}
          </option>
        );
      })}
    </select>
  );
};

export default Selects;

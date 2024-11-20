const CheckBox = ({ fieldName, iconName }) => {
  return (
    <div className="flex items-center mb-2 border-b border-gray-300 pb-2">
      <div className="mr-2">{iconName}</div> 
      <input
        type="checkbox"
        id={fieldName}
        className="cursor-pointer"
      />
      <label
        htmlFor={fieldName}
        className="text-gray-900 ml-2 cursor-pointer select-none"
      >
        {fieldName}
      </label>
      
    </div>
  );
};

export default CheckBox;

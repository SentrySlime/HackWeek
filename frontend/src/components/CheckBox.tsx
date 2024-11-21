const CheckBox = ({ fieldName, iconName, isChecked, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div
      className="flex items-center mb-4 pb-2 border-b border-gray-200 hover:bg-gray-100 rounded-lg transition-all duration-300"
    >
      <div className="mr-3 text-2xl">{iconName}</div>
      <input
        type="checkbox"
        id={fieldName}
        className="checkbox checkbox-primary scale-110"
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        htmlFor={fieldName}
        className="ml-3 text-gray-700 font-medium cursor-pointer select-none transition-colors hover:text-primary"
      >
        {fieldName}
      </label>
    </div>
  );
};

export default CheckBox;

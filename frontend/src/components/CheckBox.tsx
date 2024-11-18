const CheckBox = ({fieldName}) => {
    return (
        <div className="">
          <input type="checkbox" id={fieldName} placeholder="Search" className="cursor-pointer" />
          <label htmlFor={fieldName} className="text-gray-900 ml-2 cursor-pointer">
          {fieldName}
          </label>
        </div>
    )
}

export default CheckBox
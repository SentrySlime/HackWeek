import React, { useState } from "react";
import CheckBox from "../CheckBox";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mt-10">
      <button
        onClick={() => setIsOpen(!isOpen)} 
        className="px-4 py-2 text-white bg-black rounded-md h-8">
        Categories ▼
      </button>

      {isOpen && (
        <div className="absolute mt-2 bg-white border rounded-md shadow-lg w-34 p-2">
          <ul>
            <li>
            <CheckBox fieldName="Science" />
            </li>
            <li>
            <CheckBox fieldName="Beauty" />
            </li>
            <li>
            <CheckBox fieldName="Technology" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

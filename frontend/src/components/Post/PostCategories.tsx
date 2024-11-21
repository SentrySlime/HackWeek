import React, { useState } from "react";
import CheckBox from "../CheckBox";
import {
  FcAutomotive,
  FcCamera,
  FcNews,
  FcAndroidOs,
  FcFilm,
  FcSportsMode,
  FcCloseUpMode,
  FcCommandLine,
  FcElectronics,
  FcGlobe,
  FcGraduationCap,
  FcSteam,
  FcGallery,
} from "react-icons/fc";
import { GrCaretDown } from "react-icons/gr";

const PostCategories = ({ activeCategories, setCategories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const categories = [
    { fieldName: "Vehicles", iconName: <FcAutomotive /> },
    { fieldName: "Beauty", iconName: <FcCamera /> },
    { fieldName: "Technology", iconName: <FcAndroidOs /> },
    { fieldName: "Cinema", iconName: <FcFilm /> },
    { fieldName: "News", iconName: <FcNews /> },
    { fieldName: "Games", iconName: <FcAndroidOs /> },
    { fieldName: "Developer", iconName: <FcCommandLine /> },
    { fieldName: "School", iconName: <FcGraduationCap /> },
    { fieldName: "Electronics", iconName: <FcElectronics /> },
    { fieldName: "Memes", iconName: <FcGallery /> },
    { fieldName: "Steam", iconName: <FcSteam /> },
    { fieldName: "Sports", iconName: <FcSportsMode /> },
    { fieldName: "Gardening", iconName: <FcCloseUpMode /> },
    { fieldName: "Climate", iconName: <FcGlobe /> },
  ];

  const handleCategoryChange = (fieldName, isChecked) => {
    setCategories((prevCategories) => {
      if (isChecked) {
        return [...prevCategories, fieldName];
      } else {
        return prevCategories.filter((category) => category !== fieldName);
      }
    });
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="bg-orange-500 text-white px-4 py-2 rounded focus:outline-none flex"
      >
        Categories
        <div className="mt-1 ml-2">
          <GrCaretDown />
        </div>
      </button>

      {isDropdownOpen && (
        <div className="absolute mt-2 w-64 h-[400px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto">
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <p className="font-semibold">Categories</p>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setCategories(categories.map((c) => c.fieldName))}
                className="border rounded px-2 py-1 text-sm hover:bg-gray-100"
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setCategories([])}
                className="border rounded px-2 py-1 text-sm hover:bg-gray-100"
              >
                None
              </button>
            </div>
          </div>

          <div className="p-4">
            {categories.map((category) => (
              <CheckBox
                key={category.fieldName}
                fieldName={category.fieldName}
                iconName={category.iconName}
                isChecked={activeCategories.includes(category.fieldName)}
                onChange={(isChecked) =>
                  handleCategoryChange(category.fieldName, isChecked)
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCategories;

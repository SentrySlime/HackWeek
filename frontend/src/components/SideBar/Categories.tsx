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
import { useState } from "react";

const Categories = ({ handlePickedCategories }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categoriesList = [
    { name: "Vehicles", icon: <FcAutomotive /> },
    { name: "Beauty", icon: <FcCamera /> },
    { name: "Technology", icon: <FcAndroidOs /> },
    { name: "Cinema", icon: <FcFilm /> },
    { name: "News", icon: <FcNews /> },
    { name: "Games", icon: <FcAndroidOs /> },
    { name: "Developer", icon: <FcCommandLine /> },
    { name: "School", icon: <FcGraduationCap /> },
    { name: "Electronics", icon: <FcElectronics /> },
    { name: "Memes", icon: <FcGallery /> },
    { name: "Steam", icon: <FcSteam /> },
    { name: "Sports", icon: <FcSportsMode /> },
    { name: "Gardening", icon: <FcCloseUpMode /> },
    { name: "Climate", icon: <FcGlobe /> },
  ];

  const handleChange = (fieldName, isChecked) => {
    let updatedCategories;

    if (isChecked) {
      // Add category if checked
      updatedCategories = [...selectedCategories, fieldName];
    } else {
      // Remove category if unchecked
      updatedCategories = selectedCategories.filter((name) => name !== fieldName);
    }

    setSelectedCategories(updatedCategories);
    handlePickedCategories(updatedCategories); // Notify parent
  };

  const handleSelectAll = () => {
    const allCategories = categoriesList.map((category) => category.name);
    setSelectedCategories(allCategories);
    handlePickedCategories(allCategories); // Notify parent
  };

  const handleSelectNone = () => {
    setSelectedCategories([]);
    handlePickedCategories([]); // Notify parent
  };

  return (
    <div className="w-full mb-4 mt-4">
      <div className="flex justify-between items-center mb-6 px-4">
        <p className="font-extrabold text-xl text-primary">Filter</p>
        <div className="flex gap-3 ml-5">
          <button
            className="w-8 text-center btn btn-sm btn-primary btn-outline hover:scale-105 transition-transform duration-300 font-bold border rounded"
            onClick={handleSelectAll}
          >
            All
          </button>
          <button
            className="w-12 text-center btn btn-sm btn-secondary btn-outline hover:scale-105 transition-transform duration-300 font-bold border rounded"
            onClick={handleSelectNone}
          >
            None
          </button>
        </div>
      </div>

      <div className="p-4 overflow-auto h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 rounded-2xl shadow-lg">
        {categoriesList.map((category) => (
          <CheckBox
            key={category.name}
            fieldName={category.name}
            iconName={category.icon}
            isChecked={selectedCategories.includes(category.name)}
            onChange={(isChecked) => handleChange(category.name, isChecked)}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;

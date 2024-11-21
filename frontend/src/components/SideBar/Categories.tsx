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

const Categories = () => {
  return (
    <div className="w-full mb-4 mt-4">
      <div className="flex justify-between items-center mb-6 px-4">
        <p className="font-extrabold text-xl text-primary">Categories</p>
        <div className="flex gap-3 ml-5">
          <button className="w-8 text-center btn btn-sm btn-primary btn-outline hover:scale-105 transition-transform duration-300 font-bold border rounded">
            All
          </button>
          <button className="w-12 text-center btn btn-sm btn-secondary btn-outline hover:scale-105 transition-transform duration-300 font-bold border rounded">
            None
          </button>
        </div>
      </div>

      <div className="p-4 overflow-auto h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 rounded-2xl shadow-lg">
        <p className="font-semibold text-lg text-secondary mb-4">Recent</p>

        <CheckBox fieldName="Vehicles" iconName={<FcAutomotive />} />
        <CheckBox fieldName="Beauty" iconName={<FcCamera />} />
        <CheckBox fieldName="Technology" iconName={<FcAndroidOs />} />

        <div className="mt-10">
          <CheckBox fieldName="Cinema" iconName={<FcFilm />} />
          <CheckBox fieldName="News" iconName={<FcNews />} />
          <CheckBox fieldName="Games" iconName={<FcAndroidOs />} />
          <CheckBox fieldName="Developer" iconName={<FcCommandLine />} />
          <CheckBox fieldName="School" iconName={<FcGraduationCap />} />
          <CheckBox fieldName="Electronics" iconName={<FcElectronics />} />
          <CheckBox fieldName="Memes" iconName={<FcGallery />} />
          <CheckBox fieldName="Steam" iconName={<FcSteam />} />
          <CheckBox fieldName="Sports" iconName={<FcSportsMode />} />
          <CheckBox fieldName="Gardening" iconName={<FcCloseUpMode />} />
          <CheckBox fieldName="Climate" iconName={<FcGlobe />} />
        </div>
      </div>
    </div>
  );
};

export default Categories;

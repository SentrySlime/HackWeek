import CheckBox from "../CheckBox";
import { FcAutomotive, FcCamera, FcNews, FcAndroidOs, FcFilm, FcSportsMode , FcCloseUpMode, FcCommandLine, FcElectronics, FcGlobe, FcGraduationCap, FcSteam, FcGallery} from "react-icons/fc";

const Categories = () => {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold pl-2">Categories</p>
        <div className="flex space-x-2">
          <button className="border rounded px-2 py-1">All</button>
          <button className="border rounded px-2 py-1">None</button>
        </div>
      </div>

      <div className="border p-2 mt-4 pl-2 overflow-auto h-[400px]">
        <p className="font-semibold mb-2">Recent</p>
        <CheckBox fieldName="Vehicles" iconName={<FcAutomotive />} />
        <CheckBox fieldName="Beauty" iconName={<FcCamera />} />
        <CheckBox fieldName="Technology" iconName={<FcAndroidOs />} />

        <div className="mt-10 ">
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

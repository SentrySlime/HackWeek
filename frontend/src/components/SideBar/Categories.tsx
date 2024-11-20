import CheckBox from "../CheckBox";

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

      <div className="border p-2 mt-4 pl-2">
        <p className="font-semibold mb-2">Recent</p>
        <CheckBox fieldName="Science" />
        <CheckBox fieldName="Beauty" />
        <CheckBox fieldName="Technology" />

        <div className="mt-4 border-t pt-2">
          <CheckBox fieldName="Cinema" />
          <CheckBox fieldName="News" />
          <CheckBox fieldName="Economy" />
          <CheckBox fieldName="Memes" />
          <CheckBox fieldName="Games" />
        </div>
      </div>
    </div>
  );
};

export default Categories;

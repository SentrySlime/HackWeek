import CheckBox from "../CheckBox";

const Categories = () => {
  return (
    <div className="fixed top-40 ml-10 w-48">
      <div className="flex justify-between justify-items-center">
        <p className="align-text-bottom">Categories</p>
        <div className="flex flex-col">
          <button className="border rounded">All</button>
          <button className="border rounded">None</button>
        </div>
      </div>

      <div className="border h-64  p-1">
        <p>Recent</p>
        <div>
          <CheckBox fieldName="Science" />
          <CheckBox fieldName="Beauty" />
          <CheckBox fieldName="Technology" />
        </div>

        <div className=" mt-3 border-t border-gray-300">
          <CheckBox fieldName="cinema" />
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

import Thing from "./Card.tsx/Card";

const ThingGroup = () => {
  return (
    <div>
      <p className="text-center mt-5" >Thing Group</p>
      <div className="grid grid-cols-2 mx-auto w-fit gap-4 border-2 border-black mt-4 p-1">
        <Thing />
        <Thing />
        <Thing />
        <Thing />
      </div>
    </div>
  );
};

export default ThingGroup;
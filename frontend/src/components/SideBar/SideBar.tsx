import Categories from "./Categories";
import Resources from "./Resources";

const SideBar = ({handlePickedCategories}) => {
  return (
    <div className="fixed top-20 left-0 z-40 w-52">
      <Categories handlePickedCategories={handlePickedCategories} />
      <Resources />
    </div>
  );
};

export default SideBar;


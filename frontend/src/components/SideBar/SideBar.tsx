import Categories from "./Categories";
import Resources from "./Resources";

const SideBar = () => {
  return (
    <div className="fixed top-20 left-0 z-40 w-52">
      <Categories />
      <Resources />
    </div>
  );
};

export default SideBar;


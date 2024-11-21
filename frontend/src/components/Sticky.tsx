import { GrAddCircle } from "react-icons/gr";

const Sticky = ({ toggleImageUploader }) => {
  return (
    <div className="sticky top-0 w-screen bg-white z-50">
      {" "}
      <div className="flex justify-between">
        <div className="flex w-72">
          <img
            className="w-32 h-12 m-4"
            src="/src/assets/Logo.png"
            alt=""
          />
        </div>

        <div className="flex justify-center w-[600px]">
          <input
            className="flex border justify-items-center border-black w-full h-7 mt-6 rounded"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="flex justify-between w-72">
          <button
            id="postButton"
            onClick={toggleImageUploader}
            className="flex justify-center items-center w-28 h-8 border border-lime-600 rounded mt-4 mr-4 bg-lime-600 font-bold
                 text-white transition-colors duration-300
                 hover:bg-lime-700 hover:border-lime-700
                 focus:ring focus:ring-lime-100
                 active:bg-lime-800"
          >
            <GrAddCircle className="mr-3" /> Post
          </button>
          <button className="flex justify-center items-center w-28 h-8 border border-black rounded mt-4 mr-4">
            login/Register
          </button>
        </div>
      </div>
      <div className="border-t border-gray-300"></div>
    </div>
  );
};

export default Sticky;

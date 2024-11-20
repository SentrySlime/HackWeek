const Sticky = ({ toggleImageUploader }) => {
  return (
    <div className="sticky top-0 w-screen bg-slate-50 z-50"> {/* High z-index */}
      <div className="flex justify-between">
        <div className="flex w-72">
          <img
            className="w-10 h-10 m-4"
            src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"
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
            className="flex justify-center items-center w-28 h-8 border border-lime-600 rounded mt-4 mr-4 bg-lime-600 font-bold"
          >
            ＋ Post
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

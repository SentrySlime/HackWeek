const Sticky = () => {
  return (
    <div className="sticky top-0 w-screen bg-slate-50">
      <div className="flex justify-between">
        <div>
          <img className="w-10 h-10 m-4"src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"alt=""/>
        </div>
        <div className="flex justify-center w-2/4 ">
          <input className="flex border justify-items-center border-black w-3/6 h-7 mt-6 rounded" type="text" placeholder="Search"/>
        </div>
        <div>
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
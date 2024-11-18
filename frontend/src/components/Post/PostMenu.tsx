import DropDown from "../misc/DropDown";

const PostMenu = () => {
  return (
    <div>
      <h1 className="text-2xl">Create new Post</h1>
      <div className="w-96">
        <input
          type="text"
          className="border border-black rounded w-full"
          placeholder="Input title"
        />
      </div>
      <div>
        <DropDown />
      </div>
      <div className="mt-10">
      <textarea name="something" id="" placeholder="Insert post text here" className="border border-black w-96 h-96 resize-none"></textarea>
      </div>
    </div>
  );
};

export default PostMenu;

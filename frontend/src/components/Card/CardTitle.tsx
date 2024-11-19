const CardTitle = ({title}) => {
  return (
    <div className="align-text justify-center  w-full mb-4">
      <div className="">
        <h1 className="text-2xl">
          {title}
        </h1>
      </div>
      <div className=" text-sm text-blue-600">
        <button>@SomeUserName</button>
      </div>
    </div>
  );
};

export default CardTitle;

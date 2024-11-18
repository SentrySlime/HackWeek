import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardMisc from "./CardMisc";
import CardTitle from "./CardTitle";

const Thing = () => {
  return (
    <div className=" rounded w-[600px]">
      <div className="flex">
        <CardTitle />
        <CardMisc />
      </div>
      <CardContent src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
      <CardFooter/>
    </div>
  );
};

export default Thing;
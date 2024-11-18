import Footer from "./components/Footer";
import Sticky from "./components/Sticky";
import SideBar from "./components/SideBar/SideBar";
import CardGroup from "./components/CardGroup";
import PostMenu from "./components/Post/PostMenu";

function App() {
  return (
    <>
      <div>
        <Sticky />
        <div>
          <SideBar />
          <div className=" items-center justify-center grid gap-4 mt-10 ml-16 flex-1 ">
            <PostMenu/>
            {/* <CardGroup /> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

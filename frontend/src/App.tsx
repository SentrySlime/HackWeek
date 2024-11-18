import Footer from "./components/Footer";
import Card from "./components/Card/Card";
import Sticky from "./components/Sticky";
import SideBar from "./components/SideBar/SideBar";
import PostMenu from "./components/Post/PostMenu";

function App() {
  return (
    <>
      <div>
        <Sticky/>
        <div>

          
          <SideBar/>


          <div className=" items-center justify-center grid gap-4 mt-10 ml-16 flex-1 ">
          
            <PostMenu/>

            
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
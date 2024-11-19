import React, { useState } from "react";
import Footer from "./components/Footer";
import Sticky from "./components/Sticky";
import SideBar from "./components/SideBar/SideBar";
import CardGroup from "./components/CardGroup";
import ImageUploader from "./components/Post/ImageUploader";

function App() {
  const [isImageUploaderEnabled, setIsImageUploaderEnabled] = useState(false);

  const toggleImageUploader = () => {
    setIsImageUploaderEnabled((prev) => !prev);
  };

  return (
    <>
      <div>
        {/* Pass the toggle function and state to Sticky */}
        <Sticky toggleImageUploader={toggleImageUploader} />
        <div>
          <SideBar />
          <div className="items-center justify-center grid gap-4 mt-10 ml-16 flex-1">
            {isImageUploaderEnabled && <ImageUploader />}
            <CardGroup />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

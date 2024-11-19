import React, { useState } from "react";
import Footer from "./components/Footer";
import Sticky from "./components/Sticky";
import SideBar from "./components/SideBar/SideBar";
import CardGroup from "./components/CardGroup";
import ImageUploader from "./components/Post/ImageUploader";

function App() {
  const [isImageUploaderOpen, setIsImageUploaderOpen] = useState(false);

  return (
    <>
      <div>
        <Sticky toggleImageUploader={() => setIsImageUploaderOpen(true)} />
        <div>
          <SideBar />
          <div className="items-center justify-center grid gap-4 mt-10 ml-16 flex-1">
            <CardGroup />
          </div>
        </div>
        <Footer />

        {/* Conditionally Render ImageUploader */}
        {isImageUploaderOpen && (
          <ImageUploader onClose={() => setIsImageUploaderOpen(false)} />
        )}
      </div>
    </>
  );
}

export default App;

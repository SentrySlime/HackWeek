import React, { useState } from "react";
import Footer from "./components/Footer";
import Sticky from "./components/Sticky";
import SideBar from "./components/SideBar/SideBar";
import CardGroup from "./components/CardGroup";
import ImageUploader from "./components/Post/ImageUploader";

function App() {
  const [isImageUploaderOpen, setIsImageUploaderOpen] = useState(false);

  return (
    <div className="relative">
      {/* Sticky Header */}
      <Sticky toggleImageUploader={() => setIsImageUploaderOpen(true)} />

      {/* Sidebar */}
      <SideBar />

      {/* Main Content with Blur */}
      <div
        className={`transition-all duration-300 ml-[425px] ${ // Margin to accommodate sidebar
          isImageUploaderOpen ? "blur-sm" : ""
        }`}
      >
        <div className="mt-10">
          <CardGroup />
        </div>
        <Footer />
      </div>

      {/* ImageUploader Modal */}
      {isImageUploaderOpen && (
        <ImageUploader onClose={() => setIsImageUploaderOpen(false)} />
      )}
    </div>
  );
}

export default App;


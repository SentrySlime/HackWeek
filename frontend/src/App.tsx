import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast"; // Import Toaster
import Footer from "./components/Footer";
import Sticky from "./components/Sticky";
import SideBar from "./components/SideBar/SideBar";
import CardGroup from "./components/CardGroup";
import ImageUploader from "./components/Post/ImageUploader";

const queryClient = new QueryClient();

function App() {
  const [isImageUploaderOpen, setIsImageUploaderOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="relative">
        <Sticky toggleImageUploader={() => setIsImageUploaderOpen(true)} />

        <SideBar />

        <div
          className={`transition-all duration-300 ml-[425px] ${
            isImageUploaderOpen ? "blur-sm" : ""
          }`}
        >
          <div className="mt-10">
            <CardGroup />
          </div>
          <Footer />
        </div>

        {isImageUploaderOpen && (
          <ImageUploader onClose={() => setIsImageUploaderOpen(false)} />
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;

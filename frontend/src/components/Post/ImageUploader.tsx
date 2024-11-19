import React, { useState } from "react";
import axios from "axios";

function ImageUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", "This is a title")

    try {
      const response = await axios.post(
        "http://localhost:8080/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }

  };

  return (
    <div>
      
      <input  type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="border border-black ml-5">
        Upload
      </button>
    </div>
  );
}

export default ImageUploader;

import React, { useState } from "react";
import axios from "axios";

function ImageUploader() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault(); 

    if (!file || !title) {
      alert("All fields are required!"); 
      return;
    }

    const formData = new FormData();
    formData.append("image", file); 
    formData.append("title", title); 

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

      setTitle("");
      setFile(null);
    } catch (error) {
      console.error("Upload failed:", error); 
    }
  };

  return (
    <div className="">
      <form action="" onSubmit={handleUpload}>
        <div>
          <input
            type="text"
            value={title} 
            onChange={(event) => setTitle(event.target.value)} 
            className="border border-black rounded"
            placeholder="Enter title"
          />
        </div>

        <div>
          <input type="file" onChange={handleFileChange} />
        </div>

        <button type="submit" className="border border-black ml-5">
          Post
        </button>
      </form>

    </div>
  );
}

export default ImageUploader;
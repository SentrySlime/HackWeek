import React, { useState, useRef } from "react";
import axios from "axios";

function ImageUploader() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(
      selectedFile?.name.length > 15
        ? selectedFile.name.substring(0, 12) + "..."
        : selectedFile.name
    ); // Truncate if longer than 15 characters
  };

  const resetForm = () => {
    setTitle("");
    setFile(null);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input visually
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    // Reset inputs immediately
    resetForm();

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
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="border bg-slate-200 p-5" >
      <form onSubmit={handleUpload}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border border-black rounded"
            placeholder="Enter title"
          />
        </div>

        <div className="mt-4 flex items-center space-x-4">
          {/* Custom Select File Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()} // Trigger file input click
            className="border border-black px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Select File
          </button>

          {/* Hidden File Input */}
          <input
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }} // Hide the default file input
          />

          {/* Display "Selected file" and conditionally render the file name */}
          <div className="text-gray-600">
            Selected file:{" "}
            <span>{fileName || "None"}</span> {/* Always display text */}
          </div>
        </div>

        <button type="submit" className="border border-black ml-5">
          Post
        </button>
      </form>
    </div>
  );
}

export default ImageUploader;

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function ImageUploader({ onClose }) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("");
  const fileInputRef = useRef(null);
  const modalRef = useRef(null); // Ref for the modal content

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

  // Handle `Esc` key to close the modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        resetForm();
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc); // Cleanup on unmount
    };
  }, [onClose]);

  // Handle outside click to close the modal
  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      resetForm();
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center"
      onClick={handleOutsideClick} // Detect clicks outside modal content
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md"></div>

      {/* Modal Content */}
      <div
        ref={modalRef} // Attach the modal content ref
        className="relative bg-white p-5 border rounded shadow-lg z-10"
      >
        <button
          onClick={() => {
            resetForm();
            onClose();
          }}
          className="absolute top-2 right-2 text-black font-bold"
        >
          ✖
        </button>

        <form onSubmit={handleUpload}>
          <div>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="border border-black rounded w-full mb-4"
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
              Selected file: <span>{fileName || "None"}</span>
            </div>
          </div>

          <button type="submit" className="border border-black mt-4 px-4 py-2">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default ImageUploader;

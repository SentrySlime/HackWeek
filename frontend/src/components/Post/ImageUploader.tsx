import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function ImageUploader({ onClose }) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState("");
  const fileInputRef = useRef(null);
  const modalRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(
      selectedFile?.name.length > 15
        ? selectedFile.name.substring(0, 12) + "..."
        : selectedFile.name
    );

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result); // Set the base64 string as imageSrc
      };
      reader.readAsDataURL(file); // Read file as data URL
    }
  };

  const resetForm = () => {
    setTitle("");
    setFile(null);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear file input visually
    }
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
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      resetForm();
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        resetForm();
        onClose();
      }
    };

    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        resetForm();
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-white p-6 rounded-lg shadow-lg z-10"
      >
        <button
          onClick={() => {
            resetForm();
            onClose();
          }}
          className="absolute top-2 right-2 text-gray-600 font-bold"
        >
          ✖
        </button>

        <form onSubmit={handleUpload}>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="w-full p-2 mb-4 border rounded"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-gray-200 border rounded"
            >
              Select File
            </button>
            {imageSrc && (
        <img
          src={imageSrc}
          alt="Selected Preview"
          className="rounded w-8 h-8 bg-slate-50"
        />
      )}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <span>{fileName || "No file selected"}</span>
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default ImageUploader;

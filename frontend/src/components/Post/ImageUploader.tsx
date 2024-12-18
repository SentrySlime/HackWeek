import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import PostCategories from "./PostCategories";
import { FcCancel } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";

function ImageUploader({ onClose }) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const fileInputRef = useRef(null);
  const modalRef = useRef(null);

  const queryClient = useQueryClient();
  const handleCategoriesOnChange = (categories: string[]) => {
    setCategories((prevState) => categories);
  };
  const mutation = useMutation({
    mutationFn: async ({ file, title }) => {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", title);
      formData.append("categories", categories.toString());
      const response = await axios.post("http://localhost:8080/api", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
    onMutate: async ({ file, title }) => {
      if (!file || !title) {
        toast.error("All fields are required!");
        throw new Error("Validation failed");
      }

      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueryData(["posts"]);

      const newPost = {
        id: Date.now(),
        title,
        url: URL.createObjectURL(file),
      };

      queryClient.setQueryData(["posts"], (old) => [...(old || []), newPost]);

      return { previousPosts };
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(["posts"], context.previousPosts);
      toast.error("Upload failed. Rolling back changes.");
    },
    onSuccess: () => {
      toast.success("Image uploaded successfully!");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(
      selectedFile?.name.length > 15
        ? selectedFile.name.substring(0, 12) + "..."
        : selectedFile.name
    );

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const resetForm = () => {
    setTitle("");
    setFile(null);
    setFileName("");
    setImageSrc(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    mutation.mutate({ file, title });

    resetForm();
    onClose();
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
      <div>
        <div
          ref={modalRef}
          className="relative bg-white p-6 rounded-lg shadow-lg z-10 w-[400px]  border"
        >
          <h3 className="text-3xl mb-3">Create new post</h3>

          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="absolute top-2 right-2 text-gray-600 font-bold text-2xl
             transition-colors duration-300
             hover:border-red-700 hover:text-red-700
             focus:ring focus:ring-red-300
             active:bg-red-200"
          >
            <GiCancel />
          </button>

          <form onSubmit={handleUpload}>
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="w-72 p-2 mb-4 border rounded"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded font-bold
              transition-colors duration-300
              hover:bg-gray-300 hover:border-gray-400
              focus:ring focus:ring-gray-300
              active:bg-gray-400"
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

            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded font-bold
             transition-colors duration-300
             hover:bg-blue-600 hover:border-blue-600
             focus:ring focus:ring-blue-300
             active:bg-blue-700 border border-blue-500"
              >
                Upload
              </button>
              <PostCategories
                activeCategories={categories}
                setCategories={setCategories}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;

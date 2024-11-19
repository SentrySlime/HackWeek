import { ChangeEvent, FormEvent, useRef, useState } from "react";
import axios from "axios";

const PostMenu = () => {
  const [img, setImg] = useState<Uint8Array | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsArrayBuffer(file);

      reader.onload = () => {
        const result = reader.result;

        if (result instanceof ArrayBuffer) {
          const bytes = new Uint8Array(result);
          setImg(bytes);
        } else {
          console.error("Unexpected result type:", typeof result);
        }
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
    }
  };


  const handleChange = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!img) {
      alert("All fields are required!");
      return;
    }

    const payload = {
      img: Array.from(img),
    };

    try {
      const response = await axios.post("http://localhost:8080/api/add", payload);
      console.log("Success:", response.data);
      alert("Dog added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding dog.");
    }

    setImg(null);
    fileInputRef.current!.value = "";
  };

  
  return (
    <div>
      <div>
        <form
          className="flex flex-col gap-8 m-4 items-center"
          onSubmit={handleChange}
        >
          <label htmlFor="file-input">Upload Image</label>
          <input
            id="file-input"
            ref={fileInputRef}
            type="file"
            className="file-input w-full max-w-xs"
            onChange={handleFileChange}
            required
          />
           <button type="submit" className="btn btn-primary w-36">
          Send
        </button>
        </form>
      </div>

      {/* 
      <h1 className="text-2xl mt-96">Create new Post</h1>
      <div className="w-96">
        <input
          type="text"
          className="border border-black rounded w-full"
          placeholder="Input title"
        />
      </div>
      <div>
        <DropDown />
      </div>
      <div className="mt-10">
      <textarea name="something" id="" placeholder="Insert post text here" className="border border-black w-96 h-96 resize-none"></textarea>
      </div> */}
    </div>
  );
};

export default PostMenu;

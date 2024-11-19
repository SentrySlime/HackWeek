import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import axios from "axios";

const CardGroup = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api"); // Replace with your API endpoint
        setPosts(response.data); // Update the state with the fetched posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <button  ></button>

      {/* Map over the posts array and render a Card for each post */}
      {posts.map((post) => (
        <Card key={post.id} title={post.title} url={post.url} />
      ))}
    </div>
  );
};

export default CardGroup;

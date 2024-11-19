import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import axios from "axios";

const CardGroup = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api"); 
        setPosts(response.data); 
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <button  ></button>

      {posts.map((post) => (
        <Card key={post.id} id={post.id} title={post.title} url={post.url} />
      ))}
    </div>
  );
};

export default CardGroup;

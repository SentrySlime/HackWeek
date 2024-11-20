import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Card from "./Card/Card";
import axios from "axios";
import toast from "react-hot-toast";

const fetchPosts = async () => {
  const response = await axios.get("http://localhost:8080/api");
  return response.data;
};

const deletePost = async (id) => {
  await axios.delete(`http://localhost:8080/api/${id}`);
  toast.success("Post deleted successfully!");
};

const CardGroup = () => {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const mutation = useMutation({
    mutationFn: deletePost,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      const previousPosts = queryClient.getQueryData(["posts"]);

      queryClient.setQueryData(["posts"], (old) =>
        old.filter((post) => post.id !== id)
      );

      return { previousPosts };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(["posts"], context.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading posts.</p>;

  return (
    <div>
      {posts.map((post) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          url={post.url}
          onDelete={() => mutation.mutate(post.id)}
        />
      ))}
    </div>
  );
};

export default CardGroup;

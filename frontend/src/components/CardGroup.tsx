import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Card from "./Card/Card";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("http://localhost:8080/api");
  return response.data;
};

const deletePost = async (id) => {
  await axios.delete(`http://localhost:8080/api/${id}`);
};

const CardGroup = () => {
  const queryClient = useQueryClient();

  // Fetch posts
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // Mutation for deleting a post with optimistic updates
  const mutation = useMutation({
    mutationFn: deletePost,
    onMutate: async (id) => {
      // Cancel any outgoing refetches to prevent overwriting the optimistic update
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      // Snapshot the previous value for rollback in case of failure
      const previousPosts = queryClient.getQueryData(["posts"]);

      // Optimistically update the cache
      queryClient.setQueryData(["posts"], (old) =>
        old.filter((post) => post.id !== id)
      );

      // Return a context object with the rollback snapshot
      return { previousPosts };
    },
    onError: (error, id, context) => {
      // Roll back to the previous state on error
      queryClient.setQueryData(["posts"], context.previousPosts);
    },
    onSettled: () => {
      // Ensure the query data is refetched to sync with the server
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

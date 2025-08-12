import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  PostList: [],
  // Initial empty post list

  fetching: false,
  // State to indicate if posts are being fetched
  addPost: () => {},
  // Function to add a post

  // Function to delete a post
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  //some initial posts can be added here

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    // Logic to fetch posts from the server can be added here
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);

        return () => {
          console.log("Cleanup if needed");
          controller.abort();
        };
      });
  }, []);
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        addInitialPosts,
        deletePost: deletePost,
        fetching: fetching,
        // Expose the fetching state
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

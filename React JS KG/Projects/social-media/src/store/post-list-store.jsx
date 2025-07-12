import { createContext, useReducer } from "react";

export const PostList = createContext({
  PostList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {};
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go to Mumbai",
    body: "Hiii! Friend I am Going to Mumbai For vacation",
    reaction: 2,
    userId: "user-9",
    tag: ["Mumbai", "vacation", "Enjoy"],
  },
  {
    id: "2",
    title: "Pass ho gaye bhai",
    body: "Hiii! Friend 4 years ki masti ke baad pass ho gaye",
    reaction: 15,
    userId: "user-12",
    tag: ["Graduation", "unbilevables", "Enjoy"],
  },
];

export default PostListProvider;

import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoaingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <div className="container">
      <div className="row g-3">
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && <WelcomeMessage />}
        {!fetching &&
          postList.map((post, index) => (
            <div className="col-md-5  col-sm-6 col-12" key={index}>
              <Post key={post.id} post={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;

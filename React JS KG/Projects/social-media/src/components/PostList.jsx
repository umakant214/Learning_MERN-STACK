import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);

  return (
    <div className="container">
      <div className="row g-3">
        {postList.map((post, index) => (
          <div className="col-md-4 col-sm-6 col-12" key={index}>
            <Post key={post.id} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;

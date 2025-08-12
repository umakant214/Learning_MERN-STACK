import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoaingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
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

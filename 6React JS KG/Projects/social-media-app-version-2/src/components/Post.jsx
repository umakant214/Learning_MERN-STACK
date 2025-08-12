import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <>
      <div className="card  post-card" style={{ maxwidth: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => {
                {
                  deletePost(post.id);
                }
              }}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary me-2 mb-3">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            Thispost has been reacted by {post.reaction} people
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;

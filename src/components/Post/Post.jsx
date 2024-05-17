import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body } = post;

    const postStyle = {
        "border": "2px solid green",
        "padding": "20px",
        "border-radius": "15px"
    }

    return (
        <div>
            <div style={postStyle}>
                <h3>Post Id : {id}</h3>
                <h2>Name: {title}</h2>
                <h4>{body}</h4>
            </div>
        </div>
    );
};

export default Post;
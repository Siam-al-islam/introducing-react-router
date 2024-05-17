import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    const postsStyle = {
        'display': 'grid',
        'grid-template-columns': 'repeat(3, 1fr)',
        'gap': '12px'
    }

    return (
        <div>
            <h2>User Posts : {posts.length}</h2>

            <div style={postsStyle}>
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();

    return (
        <div>
            <h1>All Post here</h1>       
           <div className="posts">
            {
                    posts.map((post, idx) => <Post
                        key={idx}
                        post={post}
                    ></Post>)
                }
           </div>
        </div>
    );
};

export default Posts;
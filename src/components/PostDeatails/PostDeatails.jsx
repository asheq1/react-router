import { useLoaderData, useParams } from "react-router-dom";

const PostDeatails = () => {
    const post = useLoaderData();
    const {title, body} = post;

    const {postId} = useParams()
    console.log(postId)

    return (
        <div>
            <p>{title}</p>
                <h2>{body}</h2>
        </div>
    );
};

export default PostDeatails;
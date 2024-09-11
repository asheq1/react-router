import { useLoaderData } from "react-router-dom";

const PostDeatails = () => {
    const post = useLoaderData();
    const {title, body} = post;
    return (
        <div>
            <p>{title}</p>
                <h2>{body}</h2>
        </div>
    );
};

export default PostDeatails;
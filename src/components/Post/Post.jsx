import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, title, body} = post;

    

    const postDisplay = {
        border: "2px solid yellow",
        padding: "20px",
        margin: "20px"
    }

    return (
        <div style={postDisplay}>
            <span>{id}</span>
            <h3>{title}</h3>
            <p>{title}</p>
            <Link to={`post/${id}`}>Details</Link>
            <Link to={`post/${id}`}><button>Show</button></Link>
        </div>
    );
};

export default Post;
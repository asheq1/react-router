import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate(`user/${id}`)
    }

    const displayStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={displayStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`user/${id}`}>Show Details</Link>
            <Link to={`user/${id}`}>
                <button>Click me</button>
            </Link>
            <button onClick={handleNavigate}>Display</button>
        </div>
    );
};

export default User;

import { useLoaderData, useNavigate } from 'react-router-dom';

const UsersDatails = () => {
    const user = useLoaderData();
    const { name, website } = user;

    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(-1)
    }
    console.log(user)
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>Website: {website}</p>
            <button onClick={handleNavigate}>Go back</button>
        </div>
    );
};

export default UsersDatails;
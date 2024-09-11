
import { useLoaderData } from 'react-router-dom';

const UsersDatails = () => {
    const user = useLoaderData();
    const { name, website } = user;
    console.log(user)
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UsersDatails;
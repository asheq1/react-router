
const User = ({user}) => {
    const {id, name, email, phone} = user;
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
        </div>
    );
};

export default User;
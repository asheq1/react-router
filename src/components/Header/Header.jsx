import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Link to="/contact">Contact</Link>
            
        </div>
    );
};

export default Header;
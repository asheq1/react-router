import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <h2>Welcome to my desk React Router</h2>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {

    const navigation = useNavigation();
    const location = useLocation();
    return (
        <div>
            <Header />
            {
                navigation.state === "loading" ? <p>Loading ...</p> : <Outlet />
            }
            <h2>Home page</h2>
            <Footer />
        </div>
    );
};

export default Home;
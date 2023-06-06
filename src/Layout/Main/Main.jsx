import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation()
    const ignoreLoginHeaderFooter = location.pathname.includes('login')
    const ignoreRegisterHeaderFooter = location.pathname.includes('register')
    return (
        <div>
            { ignoreLoginHeaderFooter || ignoreRegisterHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { ignoreLoginHeaderFooter || ignoreRegisterHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;
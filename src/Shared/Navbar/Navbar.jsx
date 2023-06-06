import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const [cart] = useCart()
    const [isAdmin] = useAdmin()

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Logout Successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
    }

    const navItem = <div className="lg:flex items-center">
        <li className="text-lg font-bold"><Link to={'/'}>HOME</Link></li>
        <li className="text-lg font-bold"><Link to={'/menu'}>OUR MENU</Link></li>
        <li className="text-lg font-bold"><Link to={'/order/salad'}>ORDER FOOD</Link></li>
        <li className="text-lg font-bold"><Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>DASHBOARD</Link></li>
        <li className="text-lg font-bold">
            <Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link></li>
        <div className="flex items-center">
            {
                user ? <Link to={'/login'}><button className="text-lg font-bold flex items-center" onClick={handleLogout} ><span className="me-1">LOGOUT</span><FaRegUserCircle className="me-4"></FaRegUserCircle></button></Link> : <Link to={'/login'}><button className="text-lg font-bold flex items-center"><span className="me-1">LOGIN</span><FaRegUserCircle className="me-4"></FaRegUserCircle></button></Link>
            }

            {
                user ? <div><a href="#" data-toggle="tooltip" title={`${user?.displayName}`}><img className="rounded-full w-7" src={user?.photoURL} alt="" /></a></div> : ''
            }
        </div>
    </div>

    return (
        <div className="navbar fixed z-10 opacity-70  text-white bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu bg-black menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="uppercase bistro-font ms-5"><span className="text-3xl font-bold">Bistro Boss</span> <br /><span className="font-medium">R e s t a u r a n t</span></a>
            </div>
            <div className="navbar-end hidden lg:flex me-5">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;
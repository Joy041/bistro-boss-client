import { NavLink, Outlet } from "react-router-dom";
import { HiHome, HiMail, HiMenu } from "react-icons/hi";
import { MdLibraryBooks } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { RiBookletFill } from "react-icons/ri";
import { FaCalendarAlt, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin()

    // const isAdmin = true;

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden my-5 ms-5">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content bg-[#D1A054] bistro-font">
                    <p className="text-center mt-12 mb-16"><span className="text-4xl font-bold">Bistro Boss</span> <br /> <span className="text-xl font-semibold">Restaurant</span></p>

                    {
                        isAdmin ?
                            <>
                                <li><NavLink to={'/dashboard/adminHome'} className="text-sm font-black"><HiHome></HiHome>ADMIN HOME</NavLink></li>
                                <li><NavLink to={'/dashboard/addItem'} className="text-sm font-black"><FaUtensils></FaUtensils>ADD ITEM</NavLink></li>
                                <li><NavLink to={'/dashboard/manageItems'} className="text-sm font-black"><FaList></FaList>MANAGE ITEMS</NavLink></li>
                                <li><NavLink to={'/dashboard/manageBooking'} className="text-sm font-black"><MdLibraryBooks></MdLibraryBooks>MANAGE BOOKINGS</NavLink></li>
                                <li><NavLink to={'/dashboard/allUser'} className="text-sm font-black"><FaUsers></FaUsers>ALL USER</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to={'/dashboard/userHome'} className="text-sm font-black"><HiHome></HiHome>USER HOME</NavLink></li>
                                <li><NavLink to={'/dashboard/reservation'} className="text-sm font-black"><FaCalendarAlt></FaCalendarAlt>RESERVATION</NavLink></li>
                                <li><NavLink to={'/dashboard/history'} className="text-sm font-black"><FaWallet></FaWallet>PAYMENT HISTORY</NavLink></li>
                                <li><NavLink to={'/dashboard/myCart'} className="text-sm font-black"><FaShoppingCart></FaShoppingCart>
                                    MY CART <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                </NavLink></li>
                                <li><NavLink to={'/dashboard/review'} className="text-sm font-black"><VscPreview></VscPreview>ADD REVIEW</NavLink></li>
                                <li><NavLink to={'/dashboard/booking'} className="text-sm font-black"><RiBookletFill></RiBookletFill> MY BOOKING </NavLink></li>
                            </>
                    }



                    <div className="divider"></div>

                    <li><NavLink to={'/'} className="text-sm font-black"><HiHome></HiHome>HOME</NavLink></li>
                    <li><NavLink to={'/menu'} className="text-sm font-black"><HiMenu></HiMenu>MENU</NavLink></li>
                    <li><NavLink to={'/order/salad'} className="text-sm font-black"><FaShoppingBag></FaShoppingBag>ORDER FOOD</NavLink></li>
                    <li><NavLink to={'/contact'} className="text-sm font-black"><HiMail></HiMail>CONTACT</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
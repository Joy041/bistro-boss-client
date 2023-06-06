import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { GiWallet } from 'react-icons/gi';
import { FaUsers } from "react-icons/fa";
import productImg from '../../../assets/dashboard/chef.png'
import orderImg from '../../../assets/dashboard/truck.png'

const AdminHome = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)

    
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-state'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-state')
            return res.data
        }

    })

    return (
        <div>
            <h1 className="text-2xl font-semibold mt-12 ms-6 mb-6">Hi, {user.displayName} Welcome</h1>
            <div className="ms-6 md:flex gap-6">
                <div className="h-36 w-72 bg-gradient-to-r mb-4 from-[#BB34F5] to-[#FCDBFF] flex items-center justify-center text-white rounded">
                        <GiWallet className="w-12 h-12 me-6"></GiWallet>
                        <div>
                            <p className="text-4xl font-extrabold">${stats.revenue}</p>
                            <p className="text-lg font-normal">Revenue</p>
                        </div>
                </div>
                <div className="h-36 w-72 bg-gradient-to-r mb-4 from-[#D3A256] to-[#FDE8C0] flex items-center justify-center text-white rounded">
                        <FaUsers className="w-12 h-12 me-6"></FaUsers>
                        <div>
                            <p className="text-4xl font-extrabold">{stats.customers}</p>
                            <p className="text-lg font-normal">Customers</p>
                        </div>
                </div>
                <div className="h-36 w-72 bg-gradient-to-r mb-4 from-[#FE4880] to-[#FECDE9] flex items-center justify-center text-white rounded">
                        <img src={productImg} className="w-12 h-12 me-6" alt="" />
                        <div>
                            <p className="text-4xl font-extrabold">{stats.products}</p>
                            <p className="text-lg font-normal">Products</p>
                        </div>
                </div>
                <div className="h-36 w-72 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] flex items-center justify-center text-white rounded">
                        <img className="w-12 h-12 me-6" src={orderImg} alt="" />
                        <div>
                            <p className="text-4xl font-extrabold">{stats.orders}</p>
                            <p className="text-lg font-normal">Orders</p>
                        </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default AdminHome;
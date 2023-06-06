import { useQuery } from "@tanstack/react-query";
import ShowAllUser from "../../../Map/ShowAllUser/ShowAllUser";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUser = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: 'Success!',
                        text: `${user.name} is an admin now`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
                <title>Bistro Boss || Dashboard || All User</title>
            </Helmet>
            <div className="mx-auto text-center w-1/2 mb-24 mt-12 ">
                <h3 className="text-lg text-yellow-600 mb-4">---How many??---</h3>
                <h3 className="border-y-2 py-6 text-4xl font-semibold ">MANAGE ALL USERS</h3>
            </div>
            <div className="bg-sky-50 px-6 py-12">
                <div className="flex justify-between mb-4">
                    <h1 className="text-2xl font-bold bistro-font ">Total user: {users?.length} </h1>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>role</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <ShowAllUser
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    handleMakeAdmin={handleMakeAdmin}
                                ></ShowAllUser>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import ShowManageItems from "../../../Map/ShowManageItems/ShowManageItems";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()

    const handleDeleteItems = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                        refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Dashboard || Manage all items</title>
            </Helmet>
            <div className="mt-12"><SectionTitle heading={"Manage all items"} subHeading={"Hurry Up!"}></SectionTitle></div>
            <div className="max-w-screen-xl mx-auto bg-sky-50 p-14 my-16">
                <div className="flex justify-between mb-4">
                    <h1 className="text-2xl font-bold bistro-font ">Total user:  </h1>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>edit</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <ShowManageItems
                                    key={item._id}
                                    item={item}
                                    index={index}
                                    handleDeleteItems={handleDeleteItems}
                                ></ShowManageItems>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
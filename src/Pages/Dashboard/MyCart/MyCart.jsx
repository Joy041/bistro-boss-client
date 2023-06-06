import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import ShowMyCartInfo from "../../../Map/ShowMyCartInfo/ShowMyCartInfo";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const totalPrice = total.toFixed(2)

    const handleCartDelete = id => {
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
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch()
                        if (data.deletedCount > 0) {
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
        <div className=" max-w-screen-xl mx-auto">
            <Helmet>
                <title>Bistro Boss || Dashboard || My Cart</title>
            </Helmet>
            <div>
                <div className="mx-auto text-center w-1/2 mb-24 mt-12 ">
                    <h3 className="text-lg text-yellow-600 mb-4">--- MY CART ---</h3>
                    <h3 className="border-y-2 py-6 text-4xl font-semibold uppercase ">WANNA ADD MORE?</h3>
                </div>
                <div className="bg-sky-50 px-6 py-12">
                    <div className="flex justify-between bistro-font">
                        <h1 className="text-2xl font-bold">Total Order: {cart?.length} </h1>
                        <h1 className="text-2xl font-bold">Total Price: ${totalPrice} </h1>
                        <Link to={'/dashboard/payment'}><button className="btn bg-[#D1A054] border-0 btn-sm">Pay</button></Link>
                    </div>
                    <div className="mt-9">
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ITEM IMAGE</th>
                                        <th>ITEM NAME</th>
                                        <th>PRICE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((item, index) => <ShowMyCartInfo
                                            key={item._id}
                                            item={item}
                                            handleCartDelete={handleCartDelete}
                                            index = {index}
                                        ></ShowMyCartInfo>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
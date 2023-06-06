import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { _id, name, image, recipe, price } = item;
    const { user } = useContext(AuthContext);
    const [,refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = () => {
        if (user && user.email) {
            const orderItem = {foodItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            title: 'Success!',
                            text: 'Order successful',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login for make order',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state : {from: location}})
                }
            })
        }
    }

    return (
        <div className="card w-80 md:ms-4 lg:ms-0 lg:w-96 h-full bg-base-100 relative shadow-xl">
            <figure><img src={image} className="h-64" alt="Shoes" /></figure>
            <p className="absolute top-3 right-3 text-lg bg-slate-500 p-2 rounded font-bold">${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title text-3xl mx-auto font-semibold">{name}</h2>
                <p className="mt-2">{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn btn-outline border-orange-400 border-0 border-b-4 bg-slate-100 text-lg mt-4 uppercase mx-auto">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";
import { loadStripe } from "@stripe/stripe-js";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useContext(AuthContext)
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [cart] = useCart()

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    

    useEffect(() => {
        console.log(price)
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message)
            console.log(error)
        }
        else {
            setError('')
            console.log(paymentMethod)
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            setError(confirmError.message)
            console.log(confirmError)
        }

        else {
            setError('')
            console.log(paymentIntent)
        }

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            Swal.fire({
                title: 'Success!',
                text: 'Payment successful',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                itemName: cart.map(item => item.name),
                cartItemId: cart.map(item => item._id),
                menuItems: cart.map(item => item.foodItemId)
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        // 
                    }
                })
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
                className="border-2 py-2 px-3 rounded"
            />
            <button className="btn btn-outline bg-[#D1A054] border-0 px-10 text-lg bistro-font mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            <p className="text-red-600 mt-3">{error && `Error : ${error}`}</p>
            <p className="text-green-600 mt-3">{transactionId && `Transaction complete with transactionId: ${transactionId}`}</p>
        </form>
    );
};

const stripePromise = loadStripe(import.meta.env.VITE_SECRET_PK);


const App = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
    )
}

export default App;
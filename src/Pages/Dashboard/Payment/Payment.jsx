import SectionTitle from '../../../Shared/SectionTitle/SectionTitle'
import App from "../../../Shared/CheckoutForm/CheckoutForm";


const Payment = () => {
   
    return (
        <div>
            <div className="mt-14"><SectionTitle heading={'Payment'} subHeading={'Please Process'}></SectionTitle></div>
            <div className="max-w-screen-lg mx-auto mt-24">
                <App></App>
            </div>
        </div>
    );  
};

export default Payment;
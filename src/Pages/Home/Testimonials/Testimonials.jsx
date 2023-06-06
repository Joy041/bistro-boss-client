import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'


const Testimonials = () => {
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])

    return (
        <section className="mt-32">
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'What Our Clients Say'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    clients.map(client => <SwiperSlide
                        key={client._id}
                    >
                        <div className="text-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={client.rating}
                                readOnly
                                className="mx-auto mb-0 mt-12"
                            />
                            <p className="text-4xl font-bold"></p>
                            <p className="mt-7 mb-2 mx-36"></p>
                            <p className="text-3xl text-yellow-500"></p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
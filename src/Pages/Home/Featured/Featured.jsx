import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="mt-32 bg-fixed pt-10 z-20 featured-background ">
                <SectionTitle
                    heading='FROM OUR MENU'
                    subHeading='Check it out'
                ></SectionTitle>
            <div className="flex items-center mt-12 justify-center bg-slate-600 opacity-80 text-white py-32 px-64">
                <div>
                    <img src={featuredImg} className="rounded-xl shadow-xl " alt="" />
                </div>
                <div className="ms-16">
                    <p className="text-lg font-mono">March 20, 2023</p>
                    <p className="text-lg font-mono">WHERE CAN I GET SOME?</p>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn btn-outline text-white mt-6 border-0 border-b-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
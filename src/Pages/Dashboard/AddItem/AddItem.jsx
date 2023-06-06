import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_SECRET_TOKEN;
const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const [axiosSecure] = useAxiosSecure()

    const onSubmit = (data) => {
         console.log(data)
         const formData = new FormData();
         formData.append('image', data.image[0])

         fetch(img_hosting_url, {
            method: 'POST',
            body: formData
         })
         .then(res => res.json())
         .then(imgResponse => {
            if(imgResponse.success){
                const imgUrl = imgResponse.data.display_url;
                const {name, price, recipe, category} = data;
                const newItem = {name, price: parseFloat(price), recipe, category, image: imgUrl};
                console.log(newItem)
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if (data.data.insertedId) {
                        reset()
                        Swal.fire({
                            title: 'Success!',
                            text: 'Item added successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
            }
         })
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Dashboard || Add Item</title>
            </Helmet>
            <div className="mt-12"><SectionTitle heading={"Add an item"} subHeading={"What's new?"}></SectionTitle></div>
            <form className="max-w-screen-xl mx-auto bg-sky-50 p-14 my-16" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="text-xl">Recipe name*</span>
                    </label>
                    <input type="text"  {...register("name", { required: true, maxLength: 220 })} placeholder="Recipe Name" className="input input-bordered w-full mb-5 " />
                </div>
                <div className="md:flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-xl">Category*</span>
                        </label>
                        <select defaultValue='Pick one' {...register("category", { required: true })} placeholder="Pick one" className="select select-bordered me-14">
                            <option disabled>Pick one</option>
                            <option>pizza</option>
                            <option>drinks</option>
                            <option>salad</option>
                            <option>soup</option>
                            <option>dessert</option>
                            <option>desi</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-xl">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true})} placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-xl mt-5">Recipe Details*</span>
                    </label>
                    <textarea {...register("recipe", { required: true})} className="textarea textarea-bordered h-48" placeholder="Recipe Details"></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="text-xl">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input bg-sky-50" />
                </div>
                <input className="btn bg-[#D1A054] border-0 mt-2" type="submit" value={'Add Item'} />
            </form>
        </div>
    );
};

export default AddItem;
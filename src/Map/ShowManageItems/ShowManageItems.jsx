import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";


const ShowManageItems = ({ item, index, handleDeleteItems }) => {
    const { _id, name, price, image } = item;

    return (
        <tr>
            <th> {index + 1} </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{name}</div>
            </td>
            <td>
                <div className="font-bold">{price}</div>
            </td>
            <td>
                <button className="btn bg-[#D1A054] border-0 text-lg"><FaUsers></FaUsers></button>
            </td>
            <th>
                <button onClick={() => handleDeleteItems(_id)} className="btn btn-error text-white text-lg"><RiDeleteBin6Fill></RiDeleteBin6Fill></button>
            </th>
        </tr>
    );
};

export default ShowManageItems;
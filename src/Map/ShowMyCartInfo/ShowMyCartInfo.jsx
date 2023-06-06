import { RiDeleteBin6Fill } from 'react-icons/ri'

const ShowMyCartInfo = ({ item, handleCartDelete, index }) => {

    const { _id, image, name, price } = item;

    return (
        <tr>
            <th> { index + 1 } </th>
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
                {name}
            </td>
            <td>{price}</td>
            <th>
                <button onClick={() => handleCartDelete(_id)} className="btn btn-error text-white text-lg"><RiDeleteBin6Fill></RiDeleteBin6Fill></button>
            </th>
        </tr>
    );
};

export default ShowMyCartInfo;
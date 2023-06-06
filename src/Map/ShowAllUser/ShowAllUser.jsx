import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";


const ShowAllUser = ({ user, index, handleMakeAdmin }) => {

    const { name, email, role } = user;

    return (
        <tr>
            <th> {index + 1} </th>
            <td>
                <div className="font-bold">{name}</div>
            </td>
            <td>
                <div className="font-bold">{email}</div>
            </td>
            <td>
                {
                    role === 'admin' ? 'admin' : <button onClick={ () => handleMakeAdmin(user)} className="btn bg-[#D1A054] border-0 text-lg"><FaUsers></FaUsers></button>
                }
            </td>
            <th>
                <button className="btn btn-error text-white text-lg"><RiDeleteBin6Fill></RiDeleteBin6Fill></button>
            </th>
        </tr>
    );
};

export default ShowAllUser;
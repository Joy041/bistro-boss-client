import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, name, title }) => {
    return (
        <div>
            {name && <div className="mt-12"><Cover img={coverImg} name={name} title={title}></Cover></div>}
            <div className="flex mt-8 flex-col items-center">
                <div className="grid md:grid-cols-2  gap-10 max-w-screen-xl mx-auto">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <Link to={`/order/${name}`}><button className="uppercase btn btn-outline border-0 border-b-4 mt-14">Order your favourite food</button></Link>
            </div>
        </div>

    );
};

export default MenuCategory;
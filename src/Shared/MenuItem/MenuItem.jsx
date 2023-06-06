

const MenuItem = ({item}) => {

    const {name, image, price, recipe} = item;

    return (
        <div className="flex space-x-3 mt-14  items-center">
            <img src={image}  className="w-28" style={{borderRadius: '0 200px 200px 200px' }} alt="" />
            <div>
                <p className="text-base uppercase">{name}</p>
                <p className="text-xs"> {recipe}</p>
            </div>
            <div>
                <p className="text-yellow-500 me-10">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;
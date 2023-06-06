import FoodCard from "../../../Shared/FoodCard/FoodCard";


const OrderTab = ({ items }) => {
    return (
        <div>
            <div className={'grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-16'}>
                {
                    items.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;
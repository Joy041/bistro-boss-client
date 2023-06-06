import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../../Shared/MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu()
    const offeredItem = menu.filter(item => item.category === 'offered')
    const dessertItem = menu.filter(item => item.category === 'dessert')
    const pizzaItem = menu.filter(item => item.category === 'pizza')
    const saladItem = menu.filter(item => item.category === 'salad')
    const soupItem = menu.filter(item => item.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            {/* Main cover */}
            <Cover img={img} name={'Our menu'} title={'WOULD YOU LIKE TO TRY A DISH'} ></Cover>

            <div className="max-w-screen-2xl mx-auto">
                {/* Offered item */}
                <div className="mt-32"><SectionTitle heading={"Today's offer"} subHeading={"Don't miss"}></SectionTitle></div>
                <MenuCategory items={offeredItem}></MenuCategory>

                {/* Pizza item */}
                <MenuCategory items={pizzaItem} coverImg={pizzaImg} name={'pizza'} title={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

                {/* Salad item */}
                <MenuCategory items={saladItem} coverImg={saladImg} name={'salad'} title={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

                {/* Soup item */}
                <MenuCategory items={soupItem} coverImg={soupImg} name={'soup'} title={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

                {/* Desserts item */}
                <MenuCategory items={dessertItem} coverImg={dessertImg} name={'dessert'} title={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

            </div>
        </div>
    );
};

export default Menu;
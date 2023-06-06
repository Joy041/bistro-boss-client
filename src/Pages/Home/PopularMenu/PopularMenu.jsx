import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popularItem = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItem = data.filter(item => item.category === 'popular')
    //         setMenu(popularItem)
    //     })
    // }, [])

    return (
        <div>
            <SectionTitle
              heading='FROM OUR MENU'
              subHeading='Check it out'
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 max-w-screen-xl mx-auto">
                {
                    popularItem.map(item => <MenuItem
                     key={item._id}
                     item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;
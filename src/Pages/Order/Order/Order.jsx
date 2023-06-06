import Cover from '../../../Shared/Cover/Cover';
import orderCoverImg from '../../../assets/order/order.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()

    const dessertItem = menu.filter(item => item.category === 'dessert')
    const pizzaItem = menu.filter(item => item.category === 'pizza')
    const saladItem = menu.filter(item => item.category === 'salad')
    const soupItem = menu.filter(item => item.category === 'soup')
    const drinkItem = menu.filter(item => item.category === 'drinks')
    const desiItem = menu.filter(item => item.category === 'desi')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Order</title>
            </Helmet>
            <Cover img={orderCoverImg} name={'Order food'} title={'Eius unde iusto ratione optio hic recusandae ea deleniti distinctio, ipsum voluptate, non asperiores impedit, exercitationem quaerat.'}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'max-w-screen-xl mx-auto'}>
                <TabList className={'text-center mt-32 mb-12 text-2xl font-semibold'}>
                    <Tab >Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Desi</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={saladItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzaItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soupItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessertItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinkItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desiItem}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
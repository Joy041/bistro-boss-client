import img from '../../../assets/home/chef-service.jpg'

const BistroInfo = () => {
    return (
        <div className="carousel w-full mt-36 mb-24">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img} className="w-full " />
                <div className='absolute top-1/4 invisible lg:visible text-center lg:left-1/4 bg-white p-20 max-w-3xl'>
                    <h1 className='text-5xl mb-2'>Bistro Boss</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
            
        </div>
    );
};

export default BistroInfo;
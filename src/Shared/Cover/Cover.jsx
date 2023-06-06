import { Parallax } from 'react-parallax';


const Cover = ({ img, name, title }) => {
    return (
        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[700px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" md:bg-[rgba(21,21,21,0.6)] py-8 px-14 lg:py-28 lg:px-96 lg:rounded-xl ">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{name}</h1>
                        <p className="mb-5">{title}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;
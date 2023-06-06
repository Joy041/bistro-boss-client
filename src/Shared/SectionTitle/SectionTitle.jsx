

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center w-1/2 md:w-3/12">
            <h3 className="text-lg text-yellow-600 mb-4">--- {subHeading} ---</h3>
            <h3 className="border-y-2 py-6 text-4xl uppercase ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
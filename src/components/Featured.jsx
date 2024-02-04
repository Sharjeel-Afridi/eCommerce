import banner from "../assets/nike-banner.jpeg";

const Featured = () => {
    return(
        <div className="w-[100%] flex flex-col justify-center items-start px-[48px] py-[84px] bg-white ">
            <h1 className="text-2xl font-medium my-5">Featured</h1>
            <div className="relative">
                <img 
                src={banner} 
                className="w-[100%]"
                />
                <h3 className="absolute bottom-[23%] text-white  font-bold tracking-[-3px] text-[6.1vw] px-[4%]">
                    THIS SEASON'S
                     <br />
                    FRESH FITS
                </h3>
            </div>
            
        </div>
    )
};

export default Featured;
import shoe from "../src/assets/product-img.png";
const ProductPage = () => {
    const sizechartstyle= "flex items-center justify-center font-light border-[1.2px] border-slate-300 py-3 w-[7rem] rounded-md hover:border-black"

    return (
        
        <div className="flex items-start bg-white">
            {/* <div className="h-[10vh] w-[5vw]"></div> */}
            <div className="relative flex justify-around items-center">
                <div className=" w-[55%] ">
                    {/* <div className="w-[10rem] h-[100vh]">

                    </div> */}
                    <img src={shoe} className="rounded-md absolute top-[5rem] left-[3rem] w-[45%]"/>
                </div>
                
                <div className="flex flex-col h-[100%] mt-20  w-[50%] px-20  ">
                    <span className="font-normal text-[1.1rem] text-orange-500">Sustainable Materials</span>
                    

                    {/* NAME */}
                    <div className="mb-5">
                        <h1 className="font-semibold text-[2.3rem]">Nike Air Force 1'07</h1>
                        <h2 className="font-normal text-[1.3rem] text-gray-800">Men's Shoes</h2>
                    </div>
                    

                    {/* MRP */}
                    <h3 className="font-light text-[1.6rem]">MRP : $299</h3>
                    <p className="text-slate-600 font-extralight text-[1rem]">incl. of taxes</p>


                    {/* SIZE CHART */}
                    <div className="flex flex-col mt-10 ">
                        <div className="flex justify-between items-center w-[22rem]">
                            <span className="mb-2">Select Sizes</span>
                            <span className="mb-2 text-slate-500 cursor-pointer">Size Guide</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <div className={sizechartstyle}>UK 10</div>
                            <div className={sizechartstyle}>UK 10</div>
                            <div className={sizechartstyle}>UK 10</div>
                            <div className={sizechartstyle}>UK 10</div>
                            <div className={sizechartstyle}>UK 10</div>
                            <div className={sizechartstyle}>UK 10</div>
                            <div className={sizechartstyle}>UK 10</div>
                        </div>
                    </div>

                    <button className="bg-black text-white py-4 rounded-full mt-10 hover:bg-gray-600">Add To Cart</button>
                    <button className="border-2  py-4 rounded-full mt-10 hover:border-black">Favourite</button>

                    {/* DESCRIPTION */}
                    <div className="description font-extralight text-slate-700 py-10">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quod aliquam sequi. Aut, sed illum a voluptatem voluptas inventore beatae dolorem ducimus. Sed unde reiciendis ea labore, mollitia nulla minus doloremque rerum optio eligendi culpa blanditiis, nesciunt provident officiis id soluta eius voluptatem. Est repellat rerum provident ducimus numquam architecto dolorem illo molestias consectetur dolore dolores natus, aliquam quaerat enim dolor maxime unde quod, minus, quasi eius porro sunt cupiditate mollitia eveniet. Provident amet veritatis quo incidunt, enim numquam! Dicta aut molestiae delectus. Eum voluptatibus porro dolorum? Aut, ducimus dolorem corrupti, minima vitae dignissimos doloremque illo beatae quos facere eos.</p>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
};

export default ProductPage;
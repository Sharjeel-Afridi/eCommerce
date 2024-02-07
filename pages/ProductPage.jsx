/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import useFetch from "../utility/useFetch";
const ProductPage = () => {
    const {id} = useParams();
    const index = parseInt(id) - 1;
    const sizechartstyle= "flex items-center justify-center font-light border-[1.2px] border-slate-300 py-3 w-[7rem] rounded-md hover:border-black"
    const {apiResponse} = useFetch();
    if (!apiResponse) {
        return <div>Loading...</div>;
    }
    console.log(apiResponse)
    return (
        
        <div className="flex items-start bg-white">
            
            <div className="relative flex justify-around items-center">
                <div className=" w-[50%] ml-4">
                    <img 
                        src={apiResponse !== null ? (apiResponse.items[index].image) : (<h1>Loading</h1>)} 
                        className="rounded-md "
                    />
                </div>
                
                <div className="flex flex-col h-[100%] mt-20  w-[50%] px-20  ">
                    <span className="font-normal text-[1.1rem] text-orange-500">Sustainable Materials</span>
                    

                    {/* NAME */}
                    <div className="mb-5">
                        <h1 className="font-semibold text-[2.3rem]">{apiResponse !== null && (apiResponse.items[index].name)}</h1>
                        <h2 className="font-normal text-[1.3rem] text-gray-800">Men's Shoes</h2>
                    </div>
                    

                    {/* MRP */}
                    <h3 className="font-light text-[1.6rem]">MRP : ${apiResponse != null && (apiResponse.items[index].price)}</h3>
                    <p className="text-slate-600 font-extralight text-[1rem]">incl. of taxes</p>


                    {/* SIZE CHART */}
                    <div className="flex flex-col mt-10 ">
                        <div className="flex justify-between items-center w-[22rem]">
                            <span className="mb-2">Select Sizes</span>
                            <span className="mb-2 text-slate-500 cursor-pointer">Size Guide</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            
                            {apiResponse != null && (apiResponse.items[index].sizes.map(item => (
                                <div key={index} className={sizechartstyle}>{item}</div>
                            )))
                            }
                        </div>
                    </div>

                    <button className="bg-black text-white py-4 rounded-full mt-10 hover:bg-gray-600">Add To Cart</button>
                    <button className="border-2  py-4 rounded-full mt-10 hover:border-black">Favourite</button>

                    {/* DESCRIPTION */}
                    <div className="description font-extralight text-slate-700 py-10">
                    <p>{apiResponse !== null && (apiResponse.items[index].description)}</p>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
};

export default ProductPage;
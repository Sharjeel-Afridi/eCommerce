/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import useFetch from "../utility/useFetch";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, addToWishlist } from "../utility/cartSlice";
const ProductPage = () => {

    const [sizeSelected, setSizeSelected] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    
    const dispatch = useDispatch();
    const {id} = useParams();
    const index = parseInt(id) - 1;
    
    const cartIds = useSelector((store) => store.cart.cartIds);
    
   console.log(cartIds);

    const handleClick = (item) => {
        if (sizeSelected !== ''){

            let newitem = {...item};
            newitem.sizes = sizeSelected;
            newitem.quantity = selectedQuantity;

            if(!cartIds.includes(item.id)){

                dispatch(addItems(newitem));

            }else{
                alert("Already in cart")
            }
        }
        else{
            alert("Please select a size first!")
        }
        
    }

    const handleSizeClick = (element) => {
        setSizeSelected(element);
        
    }

    const handleQuantityChange = (quantity) => {
        if(quantity < 1){
            quantity = 1;
        }
        setSelectedQuantity(quantity);
    }

    const handleWishlistClick = (item) => {
        // let newitem = {...item};
        // newitem.sizes = sizeSelected;
        console.log("1");
        dispatch(addToWishlist(item))
        console.log("2");
    }

    const {apiResponse} = useFetch();
    if (!apiResponse) {
        return <div>Loading...</div>;
    }
    
    return (
        
        <div className="flex items-start bg-white">
            
            <div className="relative flex justify-around ">
                <div className=" w-[50%] ml-4 mt-20 overflow-hidden rounded-md">
                    <img 
                        src={apiResponse !== null ? (apiResponse.items[index].image) : (<h1>Loading</h1>)} 
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
                            
                            {apiResponse != null && (apiResponse.items[index].sizes.map((size, index) => (
                                <div 
                                    key={index} 
                                    className=  {`flex items-center justify-center font-light border-[1.2px] border-slate-300 py-3 w-[7rem] rounded-md cursor-pointer ${sizeSelected === size ? 'border-slate-900' : ''}  hover:border-black ` }
                                    onClick={() => handleSizeClick(size)}
                                >
                                    {size}
                                </div>
                            )))
                            }
                        </div>
                    </div>

                    {/* QUANTITY */}
                    <div className="flex justify-start items-center mt-5 gap-5">
                        <h3>Quantity:</h3>
                        <input 
                            className="w-10 text-[1.1rem]"
                            type="number"
                            min="1"
                            value={selectedQuantity}
                            onChange={(e) => handleQuantityChange(e.target.value)}
                        />
                    </div>
                    {/* ADD TO CART */}
                    <button 
                        className="bg-black text-white py-4 rounded-full mt-10 hover:bg-gray-600"
                        onClick={() => handleClick(apiResponse.items[index])}
                    >
                        Add To Cart
                    </button>
                    {/* ADD TO WISHLIST */}
                    <button 
                        className="border-2  py-4 rounded-full mt-10 hover:border-black"
                        onClick={() => handleWishlistClick(apiResponse.items[index])}
                    >
                        Favourite
                    </button>

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
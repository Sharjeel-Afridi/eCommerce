/* eslint-disable react/no-unescaped-entities */
import ShoeImg from "../assets/airforce1.png";

const ProductCard = () => {
    return (
        <div className="min-h-[300px] min-w-[300px] max-w-[400px] flex flex-col flex-none mb-4 text-[1.1rem] bg-white">
            <img src={ShoeImg} className=""/>
            <h3 className="font-semibold mt-2 ">Nike Air Force 1 Low</h3>
            <span className="text-slate-500 font-normal">Men's Shoes</span>
            <span className="font-semibold mt-1">MRP: ₹8,995</span>
        </div>
    )
};

export default ProductCard;
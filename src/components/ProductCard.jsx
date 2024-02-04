/* eslint-disable react/no-unescaped-entities */
import ShoeImg from "../assets/airforce1.png";

const ProductCard = ({name, category, price}) => {
    return (
        <div className="min-h-[300px] min-w-[300px] max-w-[400px] flex flex-col flex-none mb-4 text-[1.1rem] bg-white">
            <img src={ShoeImg} className=""/>
            <h3 className="font-semibold mt-2 ">{name}</h3>
            <span className="text-slate-500 font-normal">{category}</span>
            <span className="font-semibold mt-1">{price}</span>
        </div>
    )
};

export default ProductCard;
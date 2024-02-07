/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const ProductCard = ({name, category, price, shoeimg}) => {
    return (
        <div className="min-h-[300px] min-w-[300px] max-w-[400px] flex flex-col flex-none mb-4 text-[1.1rem] bg-white">
            <img src={shoeimg} />
            <h3 className="font-normal text-[1rem] mt-2 ">{name}</h3>
            <span className="text-slate-500 font-light">{category}</span>
            <span className="font-normal mt-3">MRP: ${price}</span>
        </div>
    )
};

export default ProductCard;
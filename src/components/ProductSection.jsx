import ProductCard from "./ProductCard";

const ProductSection = () => {
    return (
        <div className="mt-10">
            <h1 className=" bg-white pl-[50px] py-5 text-2xl font-medium">Popular Right Now</h1>
            
            <ul className="flex overflow-x-auto pl-[48px] bg-white gap-4 ">
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
            </ul>
        </div>
    )
};

export default ProductSection;
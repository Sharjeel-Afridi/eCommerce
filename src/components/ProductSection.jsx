import ProductCard from "./ProductCard";
import useFetch from "../../utility/useFetch";
import { Link } from "react-router-dom";
const ProductSection = () => {

    const {apiResponse} = useFetch();
    // console.log(apiResponse.items)
    if (!apiResponse) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-10">
            <h1 className=" bg-white pl-[50px] py-5 text-2xl font-medium">Popular Right Now</h1>
            
            <ul className="flex overflow-x-auto pl-[48px] bg-white gap-4 ">
                {apiResponse != null ? (
                    apiResponse.items.map(item => (
                    <li key={item.id}>
                        <Link to={`/product/${item.id}`}>
                            <ProductCard name={item.name} category={"Men's Shoes"} price={item.price} shoeimg={item.image}/>
                        </Link>
                    </li>
                    ))
                ) : (<h1>Loading</h1>)}
            </ul>
        </div>
    )
};

export default ProductSection;
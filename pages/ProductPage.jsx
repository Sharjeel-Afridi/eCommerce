import ProductCard from "../src/components/ProductCard";

const ProductPage = () => {
    return (
        <div className=" bg-white">
            <ProductCard name={"Air force"} category={"Mens Wear"} price={"$299"} />
            <div className="flex flex-col justify-center items-start">
                <h1 className="font-bold m-4 p-4 ">Nike Air Force 1'07</h1>
                <h2>Men's Shoes</h2>
                <h3>MRP : $299</h3>
                <p>incl. of taxes</p>
            </div>
        </div>
    )
};

export default ProductPage;
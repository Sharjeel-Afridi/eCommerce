import useFetch from "../../utility/useFetch";


const CartCard = ({image, name, price, size}) => {
    
    const { apiResponse } = useFetch();
    if (!apiResponse) {
        return <div>Loading...</div>;
    }
    console.log("cart card rendered")

    return (
        <div className="flex justify-between bg-white w-[45vw] m-4 text-[1rem] border-b-[0.667px] py-[24px] px-[8px] border-gray-200">
            <div className="flex">
                <div className="w-[13vw]">
                    <img src={image} />
                </div>
                <div className="w-[20vw] flex flex-col pl-5 pb-2 font-light text-gray-500">
                    <h1 className="font-medium text-black">{name}</h1>
                    <h3>Mens Shoes</h3>
                    <div className="flex justify-between  pt-2">
                        <p>{size}</p>
                        <p>Quantity: 1</p>
                    </div>
                </div>
            </div>
            <h3 className="pl-10 font-medium">MRP: ${price}</h3>
        </div>
    )
};

export default CartCard;
import Delete from "../assets/delete.svg";


const WishlistCard = ({id, name, image}) => {
    
    return (
        <div className="flex flex-col bg-white w-[15vw] items-center ml-4 my-4 py-4 rounded-md">
            <div className="w-[13vw]">
                <img src={image} />
            </div>
            <div className="flex flex-col py-4 font-light text-gray-500">
                <h1 className="font-medium text-black">{name}</h1>
                <h3 className="text-center pt-2">Move To Cart</h3>
                <h3 className="text-red-500 text-center pt-4 cursor-pointer hover:text-red-600">REMOVE</h3>
                
            </div>
        </div>

    )
};

export default WishlistCard;
import { useSelector } from "react-redux";
import CartCard from "../src/components/CartCard";
import WishlistCard from "../src/components/WishlistCard";

const Wishlist = () => {
    const wishlistItems = useSelector((store) => store.cart.wishlist);
    console.log(wishlistItems)
    return (
        <>
            <h1 className="flex justify-center bg-white pt-4 text-4xl font-semibold"> Wish List</h1>
            {wishlistItems.length === 0 && (
                <h1 className="flex justify-center items-center h-[80vh] bg-white">Wishlist is Empty</h1>
            )}
            
            {wishlistItems.map((element,index) => (
                <div key={index}>
                    <div>
                        <WishlistCard key={index} id={element.id} image={element.image} name={element.name} />
                    </div>
                </div>
            ))
            }
        </>
    )
};
export default Wishlist;
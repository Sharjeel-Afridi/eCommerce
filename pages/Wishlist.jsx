import { useSelector } from "react-redux";
import CartCard from "../src/components/CartCard";

const Wishlist = () => {
    const wishlistItems = useSelector((store) => store.cart.wishlist);
    console.log(wishlistItems)
    return (
        <>
            <h1> Wish List</h1>
            {wishlistItems.map((element,index) => (
                <div key={index}>
                    <div>
                        <CartCard key={index} id={element.id} image={element.image} name={element.name} price={element.price} size={element.sizes} quantity={element.quantity}/>
                    </div>
                </div>
            ))
            }
        </>
    )
};
export default Wishlist;
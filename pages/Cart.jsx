import CartCard from "../src/components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utility/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    
    let cartPrices = 0;
    let total = 0;
    cartItems.map(element => {
        cartPrices += parseInt(element.price)
        total = cartPrices + 40;
    })
    console.log(cartItems);
    // const dispatch = useDispatch();
    // const handleClick = () => {
    //     dispatch(clearCart())
    // }
    return(
        <div className="flex bg-white justify-center">
            <div className="flex flex-col">
                {cartItems.map((element, index) => (
                    
                <CartCard key={index} image={element.image} name={element.name} price={element.price} size={element.sizes} quantity={element.quantity}/>
                    
                ))}
            </div>
            <div className="flex flex-col px-[8px] w-[30vw] text-[16px]">
                <h1 className="text-[24px] mb-[24px]">Summary</h1>
                <div className="">
                    <div className="flex justify-between font-light mb-[8px]">
                        <p>Subtotal</p>
                        <p>${cartPrices}</p>
                    </div>
                    <div className="flex justify-between font-light mb-[8px]">
                        <p>Estimated Delivery & Handling</p>
                        <p>$40</p>
                    </div>
                    <div className="py-4 border-y-[0.667px] border-gray-200 my-[12px] flex justify-between">
                        <p>Total</p>
                        <p>$ {total}</p>
                    </div>
                    <button className="bg-black text-white w-[100%] py-[18px] rounded-full hover:bg-gray-800">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
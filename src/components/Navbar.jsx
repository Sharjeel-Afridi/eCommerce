import SeachSvg from "../assets/searchicon.svg";
import LogoSvg from "../assets/nike.svg";
import CartPng from "../assets/cart.png";
import UserPng from "../assets/user.png";
const Navbar = () => {
    return(
        <>
        <nav className="flex justify-between items-center pl-[16px] pr-[14px]  bg-white max-h-[60px]">
            <div className="nav-left">
                <img src={LogoSvg} className="w-[58.25px]"/>
            </div>
            
            <div className="nav-right flex gap-[40px]">
                <img src={SeachSvg} className="size-[24px]"/>
                <img src={CartPng} className="size-[24px]"/>
                <img src={UserPng} className="size-[30px]"/>

            </div>
        </nav>
        </>
    )
};

export default Navbar;
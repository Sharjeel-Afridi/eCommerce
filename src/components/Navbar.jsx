import SeachSvg from "../assets/searchicon.svg";
import LogoSvg from "../assets/nike.svg";
import CartPng from "../assets/cart.png";
import UserPng from "../assets/user.png";
const Navbar = () => {
    return(
        <>
        <nav className="flex w-[100%]  justify-between items-center pl-[16px] pr-[14px]  bg-white max-h-[60px]">
            <div className="nav-left">
                <img src={LogoSvg} className="w-[58.25px]"/>
            </div>
            
            <div className="nav-right flex gap-[40px]">
                <div className="flex justify-center items-center size-[40px] hover:bg-[#f4f4f5]  hover:rounded-full">
                    <img src={SeachSvg} className="size-[24px] cursor-pointer "/>
                </div>
                <div className="flex justify-center items-center size-[40px] hover:bg-[#f4f4f5] hover:rounded-full">
                <img src={CartPng} className="size-[24px] cursor-pointer "/>
                </div>
                <div className="flex justify-center items-center size-[40px] hover:bg-[#f4f4f5] hover:rounded-full ">
                    <img src={UserPng} className="size-[30px] cursor-pointer "/>
                </div>
                
            </div>
        </nav>
        </>
    )
};

export default Navbar;
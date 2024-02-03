import SeachSvg from "../assets/searchicon.svg";
import LogoSvg from "../assets/nike.svg";
import CartPng from "../assets/cart.png";
import UserPng from "../assets/user.png";
import { useState } from "react";
const Navbar = () => {
    const [navHover, setNavHover] = useState(false);

    const handleHover = () => {
        setNavHover(!navHover);
    }


    return(
        <>
        <nav className="flex w-[100%] justify-between items-center pl-[16px] pr-[14px]  bg-white max-h-[60px]">
            <div className="nav-left">
                <img src={LogoSvg} className="w-[58.25px]"/>
            </div>
            <div className="nav-center flex font-medium gap-5">
                <h1>New & Featured</h1>
                <h1 onMouseEnter={handleHover} onMouseLeave={handleHover}>Men</h1>
                <h1>Women</h1>
                <h1>Kids</h1>

                {navHover && <div className="w-[100vw] flex flex-col justify-center items-center absolute left-0 top-[60px] h-[400px] bg-white">
                    <p>Featured</p>

                    <p>Jordan</p>

                    <p>Shoes</p>

                    <p>Clothing</p>

                    <p>Accessories and Equipment</p>

                    <p>Shop By Sport</p>

                    <p>Shop By Brand</p>
                </div>}
            </div>
            <div className="nav-right flex gap-[40px]">
                
                
                <div className="flex justify-start items-center relative size-auto hover:bg-[#f4f4f5]  hover:rounded-full">
                    <input 
                        className="w-[180px] bg-slate-100 rounded-full px-[3rem] py-2 hover:bg-slate-200" 
                        placeholder="Search" 
                        type="text"
                    />
                    <img src={SeachSvg} className="size-[24px]  cursor-pointer absolute left-2"/> 
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
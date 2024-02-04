import SeachSvg from "../assets/searchicon.svg";
import LogoSvg from "../assets/nike.svg";
import CartPng from "../assets/cart.png";
import UserPng from "../assets/user.png";
import NavDropdown from "./NavDropdown";
import { useState } from "react";
const Navbar = () => {
    const [navHover, setNavHover] = useState(false);
    const [hoveredCategory ,setHoveredCategory] = useState(null);

    const updateState = (newValue) => {
        setNavHover(newValue);
    };

    const handleMouseEnter = (e) => {
        const category = e.target.textContent;
        setHoveredCategory(category);
        setNavHover(true);
    }

    const handleMouseLeave = () => {
        setNavHover(false);
    }

    const dropdownStyles = "max-h-[60px] px-[12px] pt-[10px] pb-[16px] border-2 border-white hover:border-b-black";
    return(
        <>
        <nav className="flex w-[100%] justify-between items-center pl-[16px] pr-[14px]  bg-white max-h-[60px]">
            <div className="nav-left">
                <img src={LogoSvg} className="w-[58.25px]"/>
            </div>
            <div className="nav-center flex font-medium">
                <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={dropdownStyles}>
                    New & Featured
                </h1>
                <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={dropdownStyles}>
                    Men
                </h1>
                <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={dropdownStyles}>
                    Women
                </h1>
                <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={dropdownStyles}>
                    Kids
                </h1>

                {navHover && <NavDropdown updateState={updateState}  category={hoveredCategory}/>}
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
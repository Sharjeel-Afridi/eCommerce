import navdropdown from "../../utility/navdropdown.json";


const NavDropdown = ({hover, category}) => {
    return (
        <div onMouseLeave={hover}  className="w-[100vw] flex flex-col justify-center items-center absolute left-0 top-[60px] h-[400px] bg-white">
            
            {navdropdown[category] && navdropdown[category].map((element,index) => 
                <h3 key={index}>{element}</h3>)
            }
        </div>
    )
};

export default NavDropdown;
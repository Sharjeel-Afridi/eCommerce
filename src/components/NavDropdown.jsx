import navdropdown from "../../utility/navdropdown.json";


const NavDropdown = ({updateState, category}) => {

    const myobj = navdropdown[category];
    const keyArray = Object.keys(navdropdown[category]);
    console.log(keyArray);

    return (
        <div onMouseEnter={() => {updateState(true)}} onMouseLeave={() => {updateState(false)}}  className="w-[100vw] flex gap-10 justify-center pt-10 absolute left-0 top-[60px] h-[400px] bg-white">
            
            {myobj && keyArray.map((key, index) => (
                <div key={index}>
                    <h1>{key}</h1>
                    {myobj[key].map((item, ind) => (
                        <p key={ind} className="font-light text-slate-500">
                            {item}
                        </p>
                    ))}
                </div>
            ))}

            
        </div>
    )
};

export default NavDropdown;
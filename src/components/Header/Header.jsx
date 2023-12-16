
import logo from "../../../public/ableton-hallmark.ef5355379032.svg"
import { IoMdArrowDropdown } from "react-icons/io";


const Header = ({handleMenuItems}) => {
   
  return (
    <>
    <div className="h-[70px] w-full border-2 border-slate-200 flex items-center">
      {/* desktop */}
      <div className="hidden w-full md:flex h-full justify-between items-center">
      
       <div className="flex gap-6">
        <div className="ml-3">
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
        <div className="flex gap-3 font-semibold">
            <ul className="flex gap-3">
                <li className="cursor-pointer">Live</li>
                <li className="cursor-pointer">Push</li>
                <li className="cursor-pointer">Note</li>
                <li className="cursor-pointer">Link</li>
                <li className="">Shop</li>
                <li className="cursor-pointer">Packs</li>
                <li className="cursor-pointer">Help</li> 
                 <li className="text-[#ff764d]">More + </li>
               
            </ul>
        
        </div>
        </div>
        <div className="mr-3 font-semibold">
            <ul className="flex gap-3">
                <li className="text-[#0000ff] cursor-pointer">Try Live for free</li>
                <li className=" cursor-pointer">Log in or register</li>
            </ul>
        </div>

</div>
{/* mobile */}
<div className=" flex md:hidden ml-3 gap-6">
    <div className="">
        <img src={logo} alt="logo" />
    </div>
    <div className="flex items-center cursor-pointer" onClick={handleMenuItems}>
        <p className="font-bold">Menu</p>
        <IoMdArrowDropdown className="" />
    </div>
   
</div>
 {/* {showMenuItems && <MenuItems/>} */}
 
    </div>
    
    </>
  )
}

export default Header
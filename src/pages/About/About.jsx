import Header from "../../components/Header/Header"
import MenuItems from "../../components/Header/MenuItems/MenuItems"
import { useState } from "react"

const About = () => {
   const[showMenuItems,setShowMenuItems]= useState(false)
    const handleMenuItems= ()=>{
        setShowMenuItems(!showMenuItems);

    }

  return (
    <div className="w-[100wh]">
        <Header handleMenuItems={handleMenuItems} />
        {showMenuItems && <MenuItems/>}

        
    </div>
  )
}

export default About
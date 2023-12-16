import Header from "../../components/Header/Header"
import MenuItems from "../../components/Header/MenuItems/MenuItems"
// import Footer from "../../components/Footer/Footer"
import StickyNav from "../../components/Header/StickyNav/StickyNav"
import { useState } from "react"

const About = () => {
   const[showMenuItems,setShowMenuItems]= useState(false)
    const handleMenuItems= ()=>{
        setShowMenuItems(!showMenuItems);

    }

  return (
    <div className="w-[100wh]">
        <Header handleMenuItems={handleMenuItems} showMenuItems={showMenuItems} />
        {showMenuItems && <MenuItems/>}
        <StickyNav/>

         {/* <Footer/> */}
        

        
    </div>
  )
}

export default About
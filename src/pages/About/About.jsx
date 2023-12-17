import Header from "../../components/Header/Header"
import MenuItems from "../../components/Header/MenuItems/MenuItems"
import Footer from "../../components/Footer/Footer"
import StickyNav from "../../components/Header/StickyNav/StickyNav"
import Main from "../../components/Main/Main"
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
        <Main/>

         <Footer/>
        

        
    </div>
  )
}

export default About
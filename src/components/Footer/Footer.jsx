
import logo from "../../../public/ableton-hallmark.ef5355379032.svg"
import { MdKeyboardArrowRight } from "react-icons/md";
import fb from "../../../public/download (4).svg"
import twt from "../../../public/download (5).svg"
import yt from "../../../public/download (6).svg"
import insta from "../../../public/download (7).svg"


const Footer = () => {
  return (
    <div className=" ml-6 mr-6 border-t-2 mb-6 border-[black] flex flex-col gap-8 mt-5 lg:flex-row flex-wrap">
      <div>
        <h1 className="font-bold text-3xl">Ableton</h1>
      </div>
      <div className=" border-t-6 mb-6 border-slate-200 flex flex-col gap-8 mt-5 lg:flex-row lg:flex-wrap text-[.9rem]">
      <div className="lg:w-[35%]">
      <div>
        <h2 className="font-semibold">Sign up to our newsletter</h2>
        <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
      </div>
      <div className="h-[35px] ">
        <input type="text" placeholder="  Email Address" className=" h-full bg-[#EEEEEE] w-[80%]"/>
        <button className=" h-full w-[20%] bg-[#0000FF] text-white p-1 font-semibold">Sign up</button>
      </div>
      </div>
      <div className="lg:-order-2  text-[.9rem] lg:w-[30%]">
        <div className="flex items-center cursor-pointer">
          <p className="">Register Live or Push</p>
          <MdKeyboardArrowRight />
          </div>
          <div className="flex items-center cursor-pointer">
             <p className=" ">About Ableton</p>
             <MdKeyboardArrowRight />
          </div>
          <div className="flex items-center cursor-pointer">
             <p className=" ">Jobs</p>
             <MdKeyboardArrowRight />
          </div>
       
      <div className=" flex gap-2">
        <div className="h-[6%] w-[6%] sm:h-[4%] sm:w-[4%] md:h-[3.5%] md:w-[3.5%] lg:h-[10%] lg:w-[10%] ">
          <img src={fb} alt="" className="h-full w-full bg-[#3477F2]" />
        </div>
        <div className="h-[6%] w-[6%] sm:h-[4%] sm:w-[4%] lg:h-[10%] lg:w-[10%] md:h-[3.5%] md:w-[3.5%] ">
          <img src={twt} alt="" className="h-full w-full bg-[#1DA1F2]" />
        </div>
        <div className="h-[6%] w-[6%] sm:h-[4%] sm:w-[4%] lg:h-[10%] lg:w-[10%] md:h-[3.5%] md:w-[3.5%] ">
          <img src={yt} alt="" className="h-full w-full bg-[#FF001D]" />
        </div>
        <div className="h-[6%] w-[6%] sm:h-[4%] sm:w-[4%] lg:h-[10%] lg:w-[10%] md:h-[3.5%] md:w-[3.5%] ">
          <img src={insta} alt="" className="h-full w-full bg-[#F77737]" />
        </div>
      </div>
   </div>
      <div className=" lg:-order-1">
        <h2 className="font-semibold">Education</h2>
        <div className="flex items-center cursor-pointer">
          <p>Offers for students and teachers</p>
          <MdKeyboardArrowRight />
        </div>
        <div className="flex items-center cursor-pointer">
          <p>Ableton for the Classroom</p>
          <MdKeyboardArrowRight />
        </div>
        <div  className="flex items-center cursor-pointer">
           <p>Ableton for Colleges and Universities</p>
          <MdKeyboardArrowRight />
        </div>
        
        
       
      </div>
      <div className="lg:w-[30%]">
        <h2 className="font-semibold">Community</h2>
        <div className="flex items-center cursor-pointer">
           <p>Find Ableton User Groups</p>
          <MdKeyboardArrowRight />
        </div>
        <div className="flex items-center cursor-pointer">
            <p>Find Certified Training</p>
          <MdKeyboardArrowRight />
        </div>
        <div className="flex items-center cursor-pointer">
           <p>Become a Certified Trainer</p>
          <MdKeyboardArrowRight />
        </div>
       
      
       
      </div>
      <div className="w-[300px] lg:w-[65%]">
      <div className=" lg:w-[50%]">
        <h2 className="font-semibold">Language and Location</h2>
        <div className="flex gap-1 h-[30px] font-semibold">
        <select name="languages" id="languages" className="w-[50%] bg-[#EEEEEE] text-[.7rem]">
          <option value="english" className="">English</option>
          <option value="deutsch">Deutsch</option>
          <option value="francais">Francais</option>
          <option value="espanol">Espanol</option>
         
        </select>
        <select name="countries" id="countries" className="w-[50%] bg-[#EEEEEE] text-[.7rem]">
          <option value="india">India</option>
          <option value="pakistan">Pakistan</option>
          <option value="usa">USA</option>
          <option value="bangladesh">Bangladesh</option>
        </select>
        </div>
        
      </div>
      </div>


      <div className="flex lg:justify-evenly w-full text-[.7rem] flex-col lg:flex-row gap-4">
      <div className="  font-semibold flex justify-start lg:w-[50%] lg:gap-2 flex-col lg:flex-row lg:items-center">
        <p className="cursor-pointer">Contact Us</p>
        <p className="cursor-pointer">Press Resources</p>
        <p className="cursor-pointer">Legal Info</p>
        <p className="cursor-pointer">Privacy</p>
        <p className="cursor-pointer">Cookie Settings</p>
        <p>Imprint</p>
      </div>
      <div className="flex gap-3  lg:justify-end lg:w-[50%] lg:items-center">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <p>Made in Berlin</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
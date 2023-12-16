

const MenuItems = () => {
  return (
    <div className=' md:hidden w-[100%] h-[700px] bg-[#0000ff] py-3'>
      <div className="mx-6 flex gap-3 flex-col">
      <div>
        <p className=" font-semibold cursor-pointer">Live</p>
      </div>
      <div>
        <p className=" font-semibold cursor-pointer">Push</p>
      </div>
      <div>
        <p className=" font-semibold cursor-pointer">Note</p>
      </div>
      <div>
        <p className=" font-semibold cursor-pointer">Link</p>
      </div>
      <div>
        <p className=" font-semibold cursor-pointer">Shop</p>
      </div>
      <div>
        <p className=" font-semibold cursor-pointer">
          Packs
        </p>
      </div>
      <div>
        <p className=" font-semibold cursor-pointer">Help</p>
      </div>
      <div className="flex flex-col gap-3 cursor-pointer">
        <div>
          <p className=" font-semibold cursor-pointer">Try Live for free</p>
        </div>
        <div>
          <p className="text-[.8rem] cursor-pointer">Log in or register</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <h1 className=" font-semibold">More on Ableton.com:</h1>
        </div>
        <div>
          <p className="text-[.8rem] cursor-pointer">Blog</p>
        </div>
        <div>
          <p className="text-[.8rem] cursor-pointer">Ableton for Colleges and  University</p>
        </div>
        <div>
          <p className="text-[.8rem] cursor-pointer">Certified Training</p>
        </div>
        <div>
          <p className="text-[#ff764d] text-[.8rem] cursor-pointer">About Ableton</p>
        </div>
        <div>
          <p className="text-[.8rem] cursor-pointer">Jobs</p>
        </div>
        <div>
          <p className="text-[.8rem] cursor-pointer">Apprenticeships</p>
        </div>
        <div></div>
      </div>
      </div>

    </div>
  )
}

export default MenuItems
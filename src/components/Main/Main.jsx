import React from 'react'
import mainphoto from "../../../public/header.avif"
import photo1 from "../../../public/photo-1.jpg"
import photo2 from "../../../public/photo-2.jpg"

const Main = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-center items-center flex-col'>
        {/* photo+para 1 */}
        <div className='w-[85%] border border-black flex flex-col gap-10 md:items-center'>
          <div className='h-full w-full border border-[green] relative'>
            <img src={mainphoto} alt="mainphoto" className=' h-auto w-full object-cover' />
             <div className='md:text-6xl lg:text-9xl md:leading-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-[#ff764d] font-semibold'>
          Ableton
          </div>
          </div>
          <div className='border border-black flex flex-col gap-2 md:w-[60%]'>
            <div className=' border border-[red]'>
              <p className='p-2 text-start text-3xl leading-7 font-semibold'>We makes <span className='text-[#0000ff]'>Live</span> , <span className='text-[#0000ff]'>Push</span>  and <span className='text-[#0000ff]'>Link —</span>  unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</p>
            </div>
            <div className='border border-[yellow]'>
              <p className='p-2 text-base leading-6'>
                Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
              </p>
            </div>
          </div>
        </div>
        {/* photo+para 2*/}
        {/* <div className='flex border border-black h-[300px] sm:h-[350px] lg:h-[400px] w-full '>
          <div className='w-[40%] border border-black'>
            <div className=' lg:bg-[green] md:bg-black h-[65%] w-[80%] border border-black relative top-14 left-24 sm:left-28 md:left-30 lg:left-36 object-cover'>
              <img src={photo1} alt="" className='object-cover w-full h-full' />
            </div>
          </div>
          <div className='w-[60%] border-black flex justify-center items-center bg-[#fbffa7]'>
            <div className='w-[50%] h-[50%] border border-black'>
              <img src={photo2} alt="" className='w-full h-full'/>
            </div>
          </div>
        </div> */}
      
      </div>

    </div>
  )
}

export default Main
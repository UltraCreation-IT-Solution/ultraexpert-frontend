import React from 'react'
import Loadimg from "../assets/videos/PreLoader.mp4"
const PreLoader = () => {
  return (
    <div className=' h-[100vh] w-[100%] flex flex-col items-center justify-center '>
      <h1 className='text-[4.5vw] font-sans tracking-wide font-extrabold -mb-[4vw] z-40'>UltraXperts</h1>
        {/* <video className='w-[28vw]' autoPlay loop muted src= {Loadimg}/> */}
        <img className='h-[15vw] w-[15vw] object-cover' src="https://i.pinimg.com/originals/07/24/88/0724884440e8ddd0896ff557b75a222a.gif " alt="" />
    </div>
  )
}

export default PreLoader;
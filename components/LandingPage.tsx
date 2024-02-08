// import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-screen bg-[#f1f1f1] pt-1'>
      <div className='textstructure mt-36 px-20'>
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className='masker'>
              <div className='w-fit flex'>
                {index === 1 && (
                  <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='w-[9vw] h-[5.8vw] mt-[1vw] mr-[.75vw] rounded-lg relative bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover'></motion.div>
                )}
                <h1 className='uppercase text-[9vw] text-[#212121] tracking-normal font-medium leading-[7vw] font-grotesk'>{item}</h1>
              </div>
            </div>
          );       
        })}
      </div>
      <div className='border-t-[1px] border-zinc-400 mt-[6vw] flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item) => <p className='text-md font-dark tracking-tight leading-none'>{item}</p>)}
        <div className='start flex items-center gap-2'>
          <div className='px-5 py-2 border-[1.5px] hover:bg-black hover:text-white uppercase font-dark text-md border-zinc-500 rounded-full'>start the project</div>
          <div className='hover:bg-black hover:text-white w-9 h-9 flex items-center justify-center rounded-full border-[1.5px] border-zinc-500'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
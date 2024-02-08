import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-20 bg-[#004D43] rounded-t-2xl'>
      <div className='overflow-hidden flex whitespace-nowrap text-white border-t-[1px] border-b-[1px] border-zinc-400'>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[28vw] pr-[3.5rem] mb-[3vw] uppercase leading-none font-grotesk'>we are ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[28vw] pr-[3.5rem] mb-[3vw] uppercase leading-none font-grotesk'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
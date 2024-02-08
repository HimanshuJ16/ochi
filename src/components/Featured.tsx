import { motion, useAnimate, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  const handleHover = (index: number) => {
    cards[index].start({y: "0"});
  }
  const handleHoverEnd = (index: number) => {
    cards[index].start({y: "100%"});
  }
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-10'>
        <h1 className='font-neue text-6xl tracking-tight'>Featured projects</h1>
      </div> 
      <div className='px-20'>
        <div className='cards w-full flex gap-5 mt-10'>
          <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='cardcontainer w-1/2 h-[85vh] relative'>
            <h1 className='text-9xl flex overflow-hidden text-[#cdea68] font-grotesk -translate-x-1/2 top-1/2 -translate-y-1/2 left-full absolute z-[9]'>
              {"FYDE".split("").map((item, index) => (
                <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.01}} className='inline-block'>{item}</motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" />
            </div>
          </motion.div>
          <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='cardcontainer w-1/2 h-[85vh] relative'>
            <h1 className='text-9xl flex overflow-hidden text-[#cdea68] font-grotesk translate-x-1/2 top-1/2 -translate-y-1/2 right-full absolute z-[9]'>
              {"VISE".split("").map((item, index) => (
                <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.01}} className='inline-block'>{item}</motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" />
            </div>
          </motion.div>
        </div> 
        <div className='cards w-full flex gap-5 mt-10'>
          <motion.div onHoverStart={() => handleHover(2)} onHoverEnd={() => handleHoverEnd(2)} className='cardcontainer w-1/2 h-[85vh] relative'>
            <h1 className='text-9xl flex overflow-hidden text-[#cdea68] font-grotesk -translate-x-1/2 top-1/2 -translate-y-1/2 left-full absolute z-[9]'>
              {"TRAWA".split("").map((item, index) => (
                <motion.span initial={{y: "100%"}} animate={cards[2]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.01}} className='inline-block'>{item}</motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" />
            </div>
          </motion.div>
          <motion.div onHoverStart={() => handleHover(3)} onHoverEnd={() => handleHoverEnd(3)} className='cardcontainer w-1/2 h-[85vh] relative'>
            <h1 className='text-9xl flex overflow-hidden text-[#cdea68] font-grotesk translate-x-1/2 top-1/2 -translate-y-1/2 right-full absolute z-[9]'>
              {"PREMIUMBLEND".split("").map((item, index) => (
                <motion.span initial={{y: "100%"}} animate={cards[3]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.01}} className='inline-block'>{item}</motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" />
            </div>
          </motion.div>
        </div> 
      </div>
    </div>
  )
}

export default Featured
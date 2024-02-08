// import React from 'react'

const Cards = () => {
  return (
    <>
    <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-10'>
      <h1 className='font-neue text-6xl tracking-tight'>Clients' reviews</h1>
    </div> 
    <div className='w-full h-[80vh] flex items-center px-16 gap-5'>  
      <div className='cardcontainer h-[55vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
          <img className='w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
          <button className='absolute px-3 py-1 rounded-full border-[1px] left-8 bottom-8 text-[#cdea68] border-[#cdea68]'>&copy;2022-2024</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[55vh]'>
        <div className='card relative rounded-xl w-full h-full bg-[#212121] flex items-center justify-center'>
          <img className='w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
          <button className='absolute px-3 py-1 rounded-full border-[1px] left-8 bottom-8 text-white border-white hover:text-black hover:bg-white'>RATING 5.0 ON CLUTCH</button>
        </div>        
        <div className='card relative rounded-xl w-full h-full bg-[#212121] flex items-center justify-center'>
          <img className='w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
          <button className='absolute px-3 py-1 rounded-full border-[1px] left-8 bottom-8 text-white border-white hover:text-black hover:bg-white'>BUSINESS BOOTCAMP ALUMNI</button>
        </div> 
      </div>
    </div>
    </>
  )
}

export default Cards
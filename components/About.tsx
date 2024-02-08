// import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-t-2xl'>
      <h1 className='font-neue text-[3.5vw] leading-[4vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to <span className='underline underline-offset-[10px] decoration-[3px]'>raise funds</span>, <span className='underline underline-offset-[10px] decoration-[3px]'>sell products</span>, <span className='underline underline-offset-[10px] decoration-[3px]'>explain complex ideas</span>, and <span className='underline underline-offset-[10px] decoration-[3px]'>hire great people</span>.</h1>
      <div className='flex border-[#99ad53] mt-10 pt-10 w-full border-t-[1.5px]'>
        <div className='w-1/2 font-neue'>
          <h1 className='text-[3.5vw]'>Our approach:</h1>
          <button className='flex uppercase gap-6 items-center px-6 py-4 mt-4 bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='bg-cover w-1/2 h-[70vh] rounded-xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")]'></div>
      </div>
    </div>
  )
}

export default About
import { useEffect, useState } from 'react'

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    })
  })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-section data-scroll-speed='-.7' className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-[#f4f4f4]'>
            <div className='relative w-3/5 h-3/5 rounded-full bg-[#212121] text-white text-center'>             
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[95%] h-5'>
                <div className='w-[1.25vw] h-[1.25vw] rounded-full bg-[#f4f4f4]'></div>
              </div>              
            </div>
          </div>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-[#f4f4f4]'>
            <div className='relative w-3/5 h-3/5 rounded-full bg-[#212121]'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[95%] h-5'>
                <div className='w-[1.25vw] h-[1.25vw] rounded-full bg-[#f4f4f4]'></div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black/80 h-[50vh] flex justify-center items-center'>
      <div className='w-full flex justify-center'>

      <div className='text-center md:mx-w-4xl'>
          <h1 className='text-center text-white text-2xl md:text:4xl'><span className='text-red-400' >App</span>Lab</h1>
          <div className='grid grid-cols-2 md:grid-cols-5 text-white mt-5'>
<div className='text-lg'>Home</div>
<div className='text-lg'>Key Features</div>
<div className='text-lg'>Pricing</div>
<div className='text-lg'>Testiminial</div>
<div className='text-lg'>FAQ</div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
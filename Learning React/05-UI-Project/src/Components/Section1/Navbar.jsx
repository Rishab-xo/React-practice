import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-5 '>
      <h4 className='bg-black text-white py-4 px-5 uppercase rounded-full text-sm'>Target Audience</h4>
      <button className='bg-gray-300 px-3 py-3 rounded-full uppercase tracking-widest text-sm'>
        banking platform</button>
    </div>
  )
}

export default Navbar
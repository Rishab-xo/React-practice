import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <div className='flex justify-center items-center font-bold gap-15 mt-4 text-xl'>
        <Link to={'/Product/men'}>Men's Section</Link>
        <Link to={'/Product/women'}>Women's Section</Link>
      </div>
        <Outlet/>
    </div>
  )
}

export default Product
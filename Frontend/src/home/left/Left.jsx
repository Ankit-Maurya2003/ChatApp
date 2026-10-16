import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'
const Left = () => {
  
  return (
    <>
<div>
        <div className='text-gray-300 col-span-3 grid grid-rows-10   bg-black h-screen overflow-hidd'>
     <div className='row-span-1 z-50'>
        <Search />
     </div>
       <div className='row-span-8 overflow-auto scrollbar-none'>
        <Users/>
       </div>
    <div className='row-span-1 '>
         <Logout/>
    </div>
      </div>
</div>
    </>
  )
}

export default Left

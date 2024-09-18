import React from 'react'
import mainlogo from '../assets/Images/GECG_logo.png';
function Navbar() {
  return (
    <div className='fixed mt-0 w-full bg-slate-100 z-10 
    '>
      <div className="flex col px-20 py-4 gap-8 items-center lg:justify-start md:justify-center w-full">
        <img src={mainlogo} className='h-16 w-16'/>
        <div className=' p-3 border-2 border-blue-800 text-2xl rounded-3xl font-bold font-sans  hover:bg-blue-600 hover:text-slate-100 '>AlumniConnect 🤝</div>
        <p className='lg:p-3 md:p-0 mt-1 lg:absolute lg:right-6 text-3xl italic hidden lg:block'>Government Engineering College, Gandhinagar</p>
      </div>
    </div>
  )
}

export default Navbar
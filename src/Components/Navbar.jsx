import React from 'react'

const Navbar = ({dark , changeTheme}) => {
  return (
    <nav className={dark ? 'navbar bg-black' : 'navbar bg-light'} >
   <span className='d-flex align-items-center justify-content-between w-100 p-4'>
     <div className="logo">
     {/* <img src={img} alt="" /> */}
     <h3 className={dark ? 'text-light' : 'text-dark'}>Expense Tracker</h3>
     </div>
     </span>
     </nav>
  )
}

export default Navbar;

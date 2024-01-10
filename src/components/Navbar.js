import React, { useState } from 'react'
import {MdKeyboardArrowDown,MdSearch} from "react-icons/md"

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
        <nav>
            <div className='nav-logo'>
                <span>LOGO</span>
            </div>
            <ul className={openMenu ? "open" : ""}>
                <li><a href='http://localhost:3000/'>Qualifications <MdKeyboardArrowDown size={20} style={{paddingTop: '5px'}}/></a></li>
                <li><a href='http://localhost:3000/'>Organizations <MdKeyboardArrowDown size={20} style={{paddingTop: '5px'}}/></a></li>
                <li><a href='http://localhost:3000/'>Research & Analysis <MdKeyboardArrowDown size={20} style={{paddingTop: '5px'}}/></a></li>
                
                <li><a href='http://localhost:3000/'>Lorem ipsum <MdKeyboardArrowDown size={20} style={{paddingTop: '5px'}}/></a></li>
                <li><a href='http://localhost:3000/'>Lorem ipsum <MdKeyboardArrowDown size={20} style={{paddingTop: '5px'}}/></a></li>
                <li> <a><MdSearch size={20} style={{paddingTop: '5px'}}/></a></li>
                <li><a className='nav-button' href='http://localhost:3000/'>Enrolment</a></li>
            </ul>
            <div className='mobile-menu' onClick={() => setOpenMenu(!openMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar

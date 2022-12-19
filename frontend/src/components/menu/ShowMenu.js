import React from 'react'
import { FcOnlineSupport, FcPlanner, FcSettings, FcBusinessContact, FcHome } from "react-icons/fc";
import { NavLink } from 'react-router-dom';

const ShowMenu = (props) => {
    const {open, click, menu} = props;

    const handleCLick = (name) => {
      menu(name);
      click();
    }

    return (
      <div className={`absolute z-30 bg-white w-1/4  mt-4 h-auto drop-shadow-lg ${!open ? 'hidden' : ''} `}>
          <div className='m-4 text-[36px] grid justify-items-center grid-cols-4 gap-4'>
            <div onClick={()=>handleCLick('attandance')} className='grid grid-cols-1 justify-items-center hover:bg-gray-100 cursor-pointer p-2'>
              <FcPlanner className=""/>
              <p className='text-[12px]'>Attendance</p>
            </div>
            <NavLink to={"/help_desk"}>
              <div onClick={()=>handleCLick('help_desk')} className='grid grid-cols-1 justify-items-center hover:bg-gray-100 cursor-pointer p-2'>
                <FcOnlineSupport className=""/>
                <p className='text-[12px]'>Help Desk</p>
              </div>
            </NavLink>
            <NavLink to={"/employees"}>
              <div onClick={()=>handleCLick('employees')} className='grid grid-cols-1 justify-items-center hover:bg-gray-100 cursor-pointer p-2'>
                <FcBusinessContact className=""/>
                <p className='text-[12px]'>Employees</p>
              </div>
            </NavLink>
            <NavLink to={"/dashboard"}>
              <div onClick={()=>handleCLick('dashboard')} className='grid grid-cols-1 justify-items-center hover:bg-gray-100 cursor-pointer p-2'>
                <FcHome className=""/>
                <p className='text-[12px]'>Dashboard</p>
              </div>
            </NavLink>
            <NavLink to={"/settings"}>
              <div onClick={()=>handleCLick('settings')} className='grid grid-cols-1 justify-items-center hover:bg-gray-100 cursor-pointer p-2'>
                <FcSettings className=""/>
                <p className='text-[12px]'>Settings</p>
              </div>
            </NavLink>
            
          </div>
      </div>
  )
}

export default ShowMenu;

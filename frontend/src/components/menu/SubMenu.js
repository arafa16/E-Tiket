import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

const SubMenu = (props) => {
    const {menu} = props;

    return (
        <div>
            <div className={`${menu === 'attandance' ? '' : 'hidden'}`}>
                <div className='flex justify-start gap-16 text-[16px]'>
                    <div className='cursor-pointer font-bold'>Attandace</div>
                    <div className='flex justify-start gap-6 text-[14px]'>
                        <div className='cursor-pointer hover:bg-gray-100 px-4'>Kalender Absen</div>
                        <div className='cursor-pointer hover:bg-gray-100 px-4'>Data Perhitungan</div>
                        <div className='cursor-pointer hover:bg-gray-100 px-4'>Pengajuan Koreksi</div>
                    </div>
                </div>
            </div>
            <div className={`${menu === 'help_desk' ? '' : 'hidden'}`}>
                <div className='flex justify-start gap-16 text-[16px]'>
                    <div className='cursor-pointer font-bold'>Help Desk</div>
                    <div className='flex justify-start gap-6 text-[14px]'>
                        <NavLink to={'pengajuan_kendala'}>
                            <div className='cursor-pointer hover:bg-gray-100 px-4'>Pengajuan Kendala</div>
                        </NavLink>
                        <NavLink to={'perbaikan_kendala'}>
                            <div className='cursor-pointer hover:bg-gray-100 px-4'>Perbaikan Kendala</div>
                        </NavLink>
                        
                    </div>
                </div>
            </div>
            <div className={`${menu === 'employees' ? '' : 'hidden'}`}>
                Employees
            </div>
            <div className={`${menu === 'dashboard' ? '' : 'hidden'}`}>
                Dashboard
            </div>
            <div className={`${menu === 'settings' ? '' : 'hidden'}`}>
                Settings
            </div>
        </div>
    )
}

export default SubMenu

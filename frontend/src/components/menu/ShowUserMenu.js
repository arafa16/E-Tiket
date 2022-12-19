import React from 'react';

const ShowUserMenu = (props) => {
    const {open} = props;
    return (
        <div className={`absolute right-10 w-[10rem] bg-white mt-4 drop-shadow-lg ${!open ? 'hidden' : ''}`}>
            <div className='text-[12px] grid grid-cols-1 py-1 justify-items-start'>
                <p className='w-full px-4 py-2 cursor-pointer'>Name</p>
                <p className='hover:bg-gray-100 w-full px-4 py-2 cursor-pointer'>Change Password</p>
                <p className='hover:bg-gray-100 w-full px-4 py-2 cursor-pointer'>Log Out</p>
            </div>
        </div>
    )
}

export default ShowUserMenu;

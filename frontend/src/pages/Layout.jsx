import React, {useState} from 'react'
import Navbar from '../components/Navbar'

const Layout = (props) => {
    const {children, menu} = props;
    return (
        <div>
            <Navbar menuLayout={menu} />
            <div className='flex justify-center'>
                <div className='w-[98%] mt-6 bg-white drop-shadow-xl p-4'>
                    <main>{children}</main>
                </div>
            </div>
        </div>
  )
}

export default Layout

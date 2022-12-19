import React, {useState} from 'react'
import Navbar from '../components/Navbar'

const Layout = (props) => {
    const {children, menu} = props;
    return (
        <div className='relative '>
            <Navbar menuLayout={menu} />
            <div className='flex justify-center'>
                <div className='w-full min-h-screen bg-gray-200 pt-10'>
                    <main>{children}</main>
                </div>
            </div>
        </div>
  )
}

export default Layout

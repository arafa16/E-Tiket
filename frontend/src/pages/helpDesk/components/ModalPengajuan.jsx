import React from 'react'
import { HiOutlineX } from "react-icons/hi";

const ModalPengajuan = (props) => {
    const {visible, onClouse} = props;
    if (!visible) return null;

    const handleClouse = (e) => {
        if(e.target.id === "container") onClouse();
    }

    return (
        <div id='container' onClick={handleClouse} className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-white p-4 rounded w-1/2'>
                <div>
                    <div className='w-full flex justify-between my-4'>
                        <div className='text-gray-500'>Modal Pengajuan</div>
                        <div className='cursor-pointer hover:text-red-500' onClick={onClouse}><HiOutlineX /></div>
                    </div>
                    <form className=''>
                        <div className='grid gap-4 grid-cols-1'>
                            <div className=''>
                                <input className='mt-1 mb-1 block w-full px-3 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400' type="text" placeholder='Jenis Keluhan' />
                            </div>
                            <div className=''>
                                <textarea className='mt-1 mb-1 block w-full px-3 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400' name="" id="" cols="30" rows="10" placeholder='Keterangan trouble'></textarea>
                            </div>
                        </div>

                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default ModalPengajuan

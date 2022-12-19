import React from 'react'
import TableUsers from './TableUsers'

const DataUsers = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-[98%] min-h-[45.5rem] bg-white mt-4 p-4'>
            <div className='flex justify-between'>
                <div>
                    <p>Pengajuan Kendala</p>
                </div>
                <div>
                    <button className='bg-teal-600 text-white px-2 py-1 rounded-xl text-[12px] hover:bg-teal-400'>+ Create User</button>
                </div>
            </div>
            <hr className='mt-4' />
            <TableUsers />
        </div>
    </div>
    
  )
}

export default DataUsers

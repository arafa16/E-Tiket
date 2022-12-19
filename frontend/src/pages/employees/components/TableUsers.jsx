import React from 'react'

const TableUsers = () => {
  return (
    <div>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
            <tr className='text-xs text-gray-500 font-bold uppercase text-left '>
                <th className='px-6 py-3 '>No</th>
                <th className='px-6 py-3 '>Nama</th>
                <th className='px-6 py-3 '>Email</th>
                <th className='px-6 py-3 '>Status</th>
                <th className='px-6 py-3 '>Action</th>
            </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
            <tr className='text-sm font-medium text-gray-800 whitespace-nowrap align-text-top'>
                <td className='px-6 py-4'>1</td>
                <td className='px-6 py-4'>Ara Fa Adri</td>
                <td className='px-6 py-4'>ara.fa@kopkarla.co.id</td>
                <td className='px-6 py-4'>active</td>
                <td className='px-6 py-4'>
                    <button className='bg-teal-600 text-white px-2 rounded-xl text-[12px] hover:bg-teal-400'>+ Create User</button>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableUsers;
import React from 'react'

const TablePerbaikan = () => {
  return (
    <div className=''>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
            <tr className='text-xs text-gray-500 font-bold uppercase text-left '>
                <th className='px-6 py-3 '>No</th>
                <th className='px-6 py-3 '>Nama</th>
                <th className='px-6 py-3 '>Pengajuan</th>
                <th className='px-6 py-3 '>Jenis</th>
                <th className='px-6 py-3 '>Tanggal Submit</th>
                <th className='px-6 py-3 '>Tanggal Update</th>
                <th className='px-6 py-3 '>P/J</th>
                <th className='px-6 py-3 '>Status</th>
                <th className='px-6 py-3 '>Action</th>
            </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
            <tr className='text-sm font-medium text-gray-800 whitespace-nowrap align-text-top'>
                <td className='px-6 py-4'>1</td>
                <td className='px-6 py-4'>Ara Fa Adri</td>
                <td className='px-6 py-4 whitespace-normal max-w-[10rem]'>Pengajuan text terjadi kendala pada saat input erp dan tidak bisa login</td>
                <td className='px-6 py-4'>jenis text</td>
                <td className='px-6 py-4'>16-06-1996 10:00:01</td>
                <td className='px-6 py-4'>16-06-1996 10:00:01</td>
                <td className='px-6 py-4'>Ara Fa Adri</td>
                <td className='px-6 py-4'>pengajuan</td>
                <td className='px-6 py-4'>
                  <select className='focus:outline-none' name="" id="">
                    <option value="">proses</option>
                    <option value="">hold</option>
                    <option value="">done</option>
                  </select>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TablePerbaikan

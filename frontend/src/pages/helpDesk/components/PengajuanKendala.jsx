import React from 'react'

const PengajuanKendala = () => {
  return (
    <div className='min-h-[36rem]'>
      <div className='flex justify-between '>
        <div>
            <p>Pengajuan Kendala</p>
        </div>
        <div>
            <button className='bg-teal-600 text-white px-2 py-1 rounded-xl text-[12px] hover:bg-teal-400'>+ Create Pengajuan</button>
        </div>
      </div>
      <hr className='mt-4 text-gray-800'/>
    </div>
  )
}

export default PengajuanKendala

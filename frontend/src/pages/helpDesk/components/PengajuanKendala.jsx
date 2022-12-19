import React, { useEffect, useState } from 'react'
import ModalPengajuan from './ModalPengajuan'
import TablePengaduan from './TablePengaduan';

const PengajuanKendala = () => {
  const [modalCreate, setModalCreate] = useState(false);
  
  const handleClickMenu = () => {
    setModalCreate(!modalCreate);
  }

  return (
    <>
      <div className='flex justify-center'>
        <div className=' w-[98%] min-h-[45.5rem] bg-white mt-4 p-4'>
          <div className='flex justify-between'>
            <div>
                <p>Pengajuan Kendala</p>
            </div>
            <div>
                <button onClick={()=> setModalCreate(true)} className='bg-teal-600 text-white px-2 py-1 rounded-xl text-[12px] hover:bg-teal-400'>+ Create Pengajuan</button>
            </div>
          </div>
          <hr className='mt-4' />
          <div className='mt-4'>
            <TablePengaduan />
          </div>
        </div>
      </div>
      <ModalPengajuan onClouse={handleClickMenu} visible={modalCreate} />
    </>
  )
}

export default PengajuanKendala

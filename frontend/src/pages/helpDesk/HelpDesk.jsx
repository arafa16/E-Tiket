import React, {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import PengajuanKendala from './components/PengajuanKendala'
import PerbaikanKendala from './components/PerbaikanKendala'

const HelpDesk = () => {

  return (
    <Layout menu={"help_desk"}>
        <Routes>
            <Route path='' element={<PengajuanKendala />} />
            <Route path='pengajuan_kendala' element={<PengajuanKendala />} />
            <Route path='perbaikan_kendala' element={<PerbaikanKendala />} />
        </Routes>
    </Layout>
  )
}

export default HelpDesk

import React from 'react'
import Layout from '../Layout'
import { Route, Routes } from 'react-router-dom'
import DataUsers from './components/DataUsers'

const Employees = () => {
  return (
    <Layout menu={"employees"}>
        <Routes>
            <Route path='' element={<DataUsers />} />
            <Route path='pengajuan_kendala' element={<></>} />
            <Route path='perbaikan_kendala' element={<></>} />
        </Routes>
    </Layout>
  )
}

export default Employees;

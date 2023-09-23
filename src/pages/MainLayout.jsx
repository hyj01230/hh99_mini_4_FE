import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div>
      <div className='mb-14'>
        <Navbar />
      </div>
      
      <Outlet />
      
    </div>
  )
}

export default MainLayout
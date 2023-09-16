import React from 'react'
import Navbar from '../components/Navbar'
import UserPolitician from '../components/UserPolitician'
import UserCitizen from '../components/UserCitizen'

function UserPage() {
  return (
    <>
      <Navbar />
      {1 === 1 ? <UserPolitician /> : <UserCitizen />}
    </>
  )
}

export default UserPage
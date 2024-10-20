import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div className='flex flex-col text-center justify-center items-center py-2 min-h-screen'>
      <h1>Profile</h1>
      <hr />
      <p className='text-4xl'>Account Details <span className='p-2 rounded bg-orange-500 text-black'>{params.id}</span></p>
    </div>
  )
}

export default UserProfile

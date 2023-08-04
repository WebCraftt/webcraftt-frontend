import AdminLayout from '@/src/layout/AdminLayout'
import React from 'react'
import Team from './team/team'

const index = () => {
  return (
    <AdminLayout>
      <h1>Admin</h1>
      <Team></Team>
    </AdminLayout>
  )
}

export default index;


'use client'
import AdminLayout from '@/src/layout/AdminLayout'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import LeftNavBar from '../../src/components/admin/leftNavBar'
import DataSegment from '../../src/components/admin/dataSegment';

const index = () => {

  const [selectedSegment,setSegment] = (useState('Team'))

  const segmentChangeHandler =(changeSegment)=>{

    setSegment((prevState)=>{
      return changeSegment;
    })
  }

  return (
    <AdminLayout>
      <div className='grid grid-rows-1 grid-cols-6 h-full'>
        <div className='col-span-1...'>
          <LeftNavBar changeSegment={segmentChangeHandler}></LeftNavBar>
        </div>
        <div className='col-span-5 px-12 py-12 bg-white'>
          {selectedSegment && <DataSegment title={selectedSegment}></DataSegment>}
        </div>
      </div>
    </AdminLayout>
  )
}

export default index;


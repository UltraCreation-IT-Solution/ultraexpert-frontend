import React from 'react'
import Sidebar from './Sidebar';
import DocsBody from './DocsBody';

const Docs = () => {
  return (
    <div className='mt-[80px] flex gap-[5px] '>
      <Sidebar />
      <DocsBody />
    </div>
  )
}

export default Docs;
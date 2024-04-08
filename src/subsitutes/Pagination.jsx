import React from 'react'

const Pagination = ({totalItems, itemsPerPage, setCurrentPage}) => {
    let pages=[];
    for(let i=1; i<=Math.ceil(totalItems/itemsPerPage); i++){
        pages.push(i);
    }
  return (
    <div className='flex gap-2 justify-center'>
        {pages.map((item,index) => (
            <div key={index} className="border border-solid border-black px-5 py-3 rounded-sm text-black cursor-pointer" onClick={() => {setCurrentPage(item)
            console.log(index)}} >
                {item}
            </div>
        ))}
    </div>
  )
}

export default Pagination
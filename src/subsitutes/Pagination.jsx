import React from 'react'

const Pagination = ({lastPage, itemsPerPage, currentPage, setCurrentPage}) => {
    let pages=[];
    for(let i=1; i<=lastPage; i++){
        pages.push(i);
    }
  return (
    <div className='flex gap-2 justify-center'>
        {pages.map((item,index) => (
            <div key={index} className={`${currentPage-1 === index && "bg-[#2A2A2A] text-white"} border border-solid border-black px-5 py-3 rounded-sm text-black cursor-pointer transition-all hover:bg-[#2A2A2A] hover:text-white`} onClick={() => {setCurrentPage(item)
            console.log(index)}} >
                {item}
            </div>
        ))}
    </div>
  )
}

export default Pagination
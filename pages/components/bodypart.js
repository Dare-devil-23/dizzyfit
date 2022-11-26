import React from 'react'

const BodyPart = (props) => {
  return (
    <button className={
      `flex justify-center items-center m-1 font-medium py-2 px-4 lg:py-2 lg:px-3 2xl:py-3 2xl:px-5 rounded-full text-white border border-zinc-300 border-opacity-25  hover:border-opacity-10
      ${props.bodyPart === props.part ? "bg-red-600 hover:bg-red-500" : "bg-zinc-800 hover:bg-zinc-600"}
      ` } 
      onClick={()=>{
        props.setBodyPart(props.part)
        props.setCurrentPage(1)
        props.setSearchResult([])
      }}
    >
      <div className="text-md lg:text-lg 2xl:text-xl font-normal leading-none max-w-full flex-initial">
          {props.part}
      </div>
    </button>
  )
}

export default BodyPart
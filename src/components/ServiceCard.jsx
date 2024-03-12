import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className=' bg-white rounded-[20px] flex-1 sm:w-[350] sm:min-w-[350] shadow-3xl px-10 py-16'>
    <div className=' w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
    <img src={imgURL}
     alt={label}
     width={24}
     height={24}
      />
      </div>
      <h3 className=" text-3xl leading-normal font-palanquin font-bold mt-5">{label}</h3>
      <p className=" break-words leading-normal font-montserrat mt-3 text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard
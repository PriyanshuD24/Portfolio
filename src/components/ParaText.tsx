import React from 'react'

const ParaText = ({children, className} : {children: React.ReactNode, className?:string}) => {

  return (
    <p className={`text-xs xl:text-sm  text-gray-200  ${className}`}>
      {children}
    </p>
  

  )
}

export default ParaText
import React from 'react'

const SubHeading = ({children, className} : {children: React.ReactNode, className?:string}) => {
  return (
    <h3 className={`text-base md:text-lg lg:text-xl  text-gray-200  ${className}`}>
      {children}
    </h3>
  )
}

export default SubHeading
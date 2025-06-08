import React from 'react'

const MainHeading = ({children, className} : {children: React.ReactNode,className?: string}) => {
  return (
    <h1 className={"text-lg md:text-xl lg:text-2xl font-bold text-gray-200  " + className }>
      {children}
    </h1>
  )
}

export default MainHeading
import MainHeading from '@/components/MainHeading'
import React from 'react'

type Props= {
    heading: string,
    children?: React.ReactNode
}
const HeadingWrapper = ({heading, children}: Props) => {
  return (
    <div className='p-4 h-full space-y-6'>
           <MainHeading className={"w-fit"}>{heading}</MainHeading>
           {children}
    </div>
  )
}

export default HeadingWrapper
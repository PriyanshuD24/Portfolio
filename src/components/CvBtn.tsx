
import React from 'react'
import { Button } from './ui/button'
import { PiReadCvLogo } from 'react-icons/pi'
import Link from 'next/link'

const CvBtn = () => {
  return (
    <Link href={"/Priyanshu Resume.pdf"} target="_blank"  >
  <Button variant={"secondary"}  className='w-fit'>
    <PiReadCvLogo/> Download CV
  </Button>
    </Link>
  )
}

export default CvBtn
"use client"
import React from 'react'
import { IShowMoreProps } from './show-more.props'
import { useRouter } from 'next/navigation'
import { MyButton } from '@/UI'
import { updateSearchParams } from '@/helper'
const ShowMore:React.FC<IShowMoreProps> = ({isNext,pageNumber,}):JSX.Element => {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
     const newPathname = updateSearchParams('limit',String(newLimit))
     router.push(newPathname)
    }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <MyButton title='Show more' type='button' 
            containerStyles='bg-primary-blue rounded-full text-white'
            handleClick={handleNavigation} />
        )}
    </div>
  )
}

export default ShowMore
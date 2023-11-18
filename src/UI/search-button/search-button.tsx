import React from 'react'
import { ISearchButtonProps } from './search-button.props'
import Image from 'next/image'

const SearchButtonMy:React.FC<ISearchButtonProps> = ({otherClasses,...props}):JSX.Element => {
  return (
    <button {...props} className={`${otherClasses} -ml-3 z-10`}>
    <Image src={'/magnifying-glass.svg'} alt='magnifying-glass-icon' width={40} height={40} className='object-contain'/>
    </button>
  )
}

export default SearchButtonMy
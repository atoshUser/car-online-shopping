import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {footerLinks} from "@/constants"
const Footer = () => {
  return (
  <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100 '>
   <div className='flex flex-col sm:flex-row flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
   <div className='flex flex-col justify-st items-start sm:items-center gap-6'>
     <Image src={'/logo.svg'} alt='site-logo-image' className='object-contain' width={118} height={18}/>
     <p className='text-base text-gray-700'>
      Carhub 2023 <br />
 All rights reserved &copy;
     </p>
   </div>
   <div className='flex  flex-wrap gap-[20px]  lg:gap-[35px]'>
    {footerLinks.map((link) => (
       <div key={link.title} className=' flex flex-col gap-[15px]'>
     <h3 className='font-bold'>{link.title}</h3>
      {link.links.map((item) => (
         <Link key={item.title} href={item.url} className='text-gray-500'>{item.title}</Link>
      ))}
       </div>
    ))}
   </div>
     <div className='flex flex-col justify-start items-center gap-[10px] flex-wrap  
     border-gray-100  '>
       
    <div className='flex gap-[10px]'>
        <Link href={'/'} className='text-gray-500'>Privacy Policy</Link>
        <Link href={'/'} className='text-gray-500'>Terms of Use</Link>
    </div>
    <p>@2023 carHub. All Rights Reserved</p>
     </div>
   </div>
  </footer>
  )
}

export default Footer

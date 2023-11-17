"use client"
import React, { Fragment } from 'react'
import { ICarDetailsProps } from './car-details.props'
import Image from 'next/image'
import {Transition,Dialog} from "@headlessui/react"


const CarDetails:React.FC<ICarDetailsProps> = ({data,closeModal,isShow}):JSX.Element => {
  return (
   <>
    <Transition appear as={Fragment} show={isShow} >
    <Dialog onClose={closeModal}  className={`relative z-10`}>
   <Transition.Child
    as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0'
    leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0' enterTo='opacity-100'>
     <div className='fixed inset-0 bg-black bg-opacity-25'></div>
   </Transition.Child>

   <div className='fixed inset-0 overflow-y-auto'>
   <div className='flex min-h-full items-center justify-center p-4 text-center'>
<Transition.Child
    as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 scale-95'
    leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95' enterTo='opacity-100 scale-100'>
     {/* <div className='fixed inset-0 bg-black bg-opacity-25'></div> */}
     <Dialog.Panel className={'relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xsl transition-all flex flex-col gap-5'}>
       <button type='button' onClick={closeModal} className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100'>
        <Image src={'/close.svg'} alt='close-icon' width={20} height={20} className='object-contain'/>
       </button>
       <div className="flex-1  flex flex-col gap-3">
        <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
          <Image src={'/hero.png'} alt='car' fill priority className='object-contain'/>
        </div>
       </div>
     </Dialog.Panel>
   </Transition.Child>
   </div>
   </div>
    </Dialog>
    </Transition>
   </>
  )
}

export default CarDetails
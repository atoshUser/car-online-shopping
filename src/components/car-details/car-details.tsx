"use client"
import React, { Fragment } from 'react'
import { ICarDetailsProps } from './car-details.props'
import Image from 'next/image'
import {Transition,Dialog} from "@headlessui/react"
import { RequestData } from '@/server/get-options'


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
     <Dialog.Panel className={'relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xsl transition-all flex flex-col gap-5'}>
       <button type='button' onClick={closeModal} className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-lg'>
        <Image src={'/close.svg'} alt='close-icon' width={20} height={20} className='object-contain'/>
       </button>
       <div className="flex-1  flex flex-col gap-3">
        <div className='relative bg-blue-400 w-full h-40  bg-cover bg-center rounded-lg'>
          <Image src={RequestData.getCarImages(data,'angle')} alt='car' fill priority className='object-contain'/>
        </div>
         <div className='flex gap-3'>
   <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
   <Image src={RequestData.getCarImages(data,'29')} alt='car' fill priority className='object-contain'/>
   </div>
   <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
   <Image src={RequestData.getCarImages(data,'33')} alt='car' fill priority className='object-contain'/>
   </div>
   <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
   <Image src={RequestData.getCarImages(data,'13')} alt='car' fill priority className='object-contain'/>
   </div>
         </div>
       </div>

       {/* data of car */}
       <div className='flex-1 flex flex-col gap-2'>
     <h2 className='font-bold text-black-500 pl-7'>
       {data.model.toUpperCase()}
     </h2>
     <div className='mt-3 flex flex-wrap gap-4'>
    {Object.entries(data).map(([key,val]) => (
      <div className='flex justify-between gap-5 w-full text-right'>
      <h4 className='text-gray capitalize'>{key.split('_').join(' ')}</h4>
      <p>{val}</p>
      </div>
    ))}
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
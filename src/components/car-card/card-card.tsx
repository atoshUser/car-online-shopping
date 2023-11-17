"use client"
import React,{useState} from 'react'
import { ICarCardProps } from './car-card.props'
import { calculateCarRent } from '@/helper'
import Image from 'next/image'
import { MyButton } from '@/UI'
import { CarDetails } from '..'

const CarCard:React.FC<ICarCardProps> = (props):JSX.Element => {
    const {city_mpg,combination_mpg,cylinders,
    displacement,drive,fuel_type,highway_mpg,make,model,transmission,year} = props.data

    const carRent = calculateCarRent(city_mpg,year)
      const [isOpen, setIsOpen] = useState<boolean>(false)

      const handleOpen = () => {
         setIsOpen(pre => !pre)
      }
  return (
    <div className='car-card group cursor-pointer'>
        <div className="car-card__content">
            <div className='car-card__content-title'>
            <h2>
                {make} {model}
            </h2>
            </div>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
              $
            </span>
            {carRent}
            <span className="self-end text-[14px] font-medium">/day</span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
   <Image src={'/hero.png'} alt='car-image' priority fill className='object-contain'/>
        </div>
        <div className="relative  flex w-full mt-2">
             <div className="flex   group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={'/steering-wheel.svg'} alt='steering-icon' width={20} height={20}/>
                    <p className="text-[14px]">
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={'/tire.svg'} alt='steering-icon' width={20} height={20}/>
                    <p className="text-[14px]">
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={'/gas.svg'} alt='steering-icon' width={20} height={20}/>
                    <p className="text-[14px]">
                       {city_mpg}MPG
                    </p>
                </div>
             </div>
             <div className='car-card__btn-container'>
         <MyButton title='View More' textStyles='text-white text-[14px] leading-[17px] font-bold' containerStyles='w-full py-[16px] rounded-full bg-primary-blue' onClick={handleOpen} />

             </div>
        </div>
        {isOpen && <CarDetails isShow={isOpen} closeModal={handleOpen} data={props.data}/>}
    </div>
  )
}

export default CarCard
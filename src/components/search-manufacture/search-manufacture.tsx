"use client"
import React,{useState,Fragment} from "react"
import { ISearchManufactureProps } from "./search-manufacture.props"
import {Combobox,Transition} from "@headlessui/react"
import Image from "next/image"
import {manufacturers} from "@/constants"



const SearchManufacture:React.FC<ISearchManufactureProps> = 
({manufacture,setManufacture}):JSX.Element => {
      const [query, setQuery] = useState<string>('')
     
      const filteredManufactured = query === '' ? manufacturers : 
      manufacturers.filter((item) => (item.toLowerCase().replace(/\s+/g,'')
      .includes(query.toLowerCase().replace(/\s+/g,''))))
      
    return (
        <div className="search-manufacturer">
            <Combobox value={manufacture} onChange={setManufacture}>
                 <div className="relative w-full">
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image src={'/car-logo.svg'} alt="car-icon-svg" 
                        width={20} height={20} className="ml-4"/>
                    </Combobox.Button>
                    <Combobox.Input className={'search-manufacturer__input'} 
                    placeholder="volkswagen"
                    displayValue={(manufac:string) => manufac}
                    onChange={(e) => setQuery(e.target.value)}
                     />
                     <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      afterLeave={() => setQuery('')}
                      >
                 <Combobox.Options>
                     {
                        filteredManufactured.map((item) => (
                             <Combobox.Option key={item} 
                              className={({active}) => 
                              `relative search-manufactured__option 
                               ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                               value={item}>
                                {({selected,active}) => ( 
                                    <>
                                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                       
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                                    </>
                                )}
                             </Combobox.Option>
                        )
                     )}
                 </Combobox.Options>
                     </Transition>
                 </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacture
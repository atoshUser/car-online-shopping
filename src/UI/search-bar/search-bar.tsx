"use client"

import { SearchManufacture } from "@/components"
import React,{useState} from "react"
import {SearchButtonMy} from "@/UI/index"
import Image from "next/image"
import { useRouter } from "next/navigation"




const SearchButton:React.FC = () => {

     const [manufacture, setManufacture] = useState<string>('')
     const [model, setModel] = useState<string>('')

    const router = useRouter()



    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
     e.preventDefault()
      if(manufacture === '' && model === ''){
         return alert('Please fill in the search bar')
      }
      updateSearchParams(model.toLowerCase(),manufacture.toLowerCase())
    }

    const updateSearchParams = (model:string,manufacturer:string) => {
       const searchParams = new URLSearchParams(window.location.search)
       if (model) {
         searchParams.set('model',model)
       }else {
         searchParams.delete('model')
       }
       if (manufacture) {
         searchParams.set('manufacturer',manufacturer)
       }else {
         searchParams.delete('manufacturer')
       }
       const newPathname = `${window.location.pathname}?${searchParams.toString()}`
       router.push(newPathname)
    }
 return (
    <form  className="searchbar" onSubmit={handleSearch}>
    <div className="searchbar__item">
        <SearchManufacture manufacture={manufacture} setManufacture={setManufacture}/>
         <SearchButtonMy otherClasses="sm:hidden"/>
    </div>
    <div className="searchbar__item">
       <Image src={'/model-icon.png'} className="absolute w-[20px] ml-4" width={25} height={25} alt="car-model"/>
       <input type="text" name="model" value={model} placeholder="Tiguan" onChange={(e) => setModel(e.target.value)} className="searchbar__input"/>
       <SearchButtonMy otherClasses="sm:hidden"/>
    </div>
    
    </form>
 )
}


export default SearchButton
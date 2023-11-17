"use client"

import { SearchManufacture } from "@/components"
import React,{useState} from "react"




const SearchButton:React.FC = () => {

     const [manufacture, setManufacture] = useState<string>('')
    const handleSearch = () => {

    }
 return (
    <form  className="searchbar" onSubmit={handleSearch}>
    <div className="searchbar__item">
        <SearchManufacture/>
    </div>
    </form>
 )
}


export default SearchButton
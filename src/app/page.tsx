
import { CustomFilter, SearchBar } from "@/UI";
import { CarCard, Hero } from "@/components";
import { ICarData, manufacturers } from "@/constants";
import { RequestData } from "@/server/get-options";
import {useEffect} from "react"
import {yearsOfProduction,fuels} from "@/constants/index"

export default async function Home ({searchParams}) {
  
  const allCars:ICarData[] = await RequestData.getCars({manufacturer:searchParams.manufacturer || '',
   year:searchParams.year || 2022,
   fuel:searchParams.fuel || '',
   limit:searchParams.limit || 10,model:searchParams.model || ''})

    //   const dataCars:ICarData[] = await RequestData.getCars()
     
      
       
 

 
    
    
   return (
     <main className="overflow-hidden">
         <Hero/>
         <div className="mt-12 padding-x padding-y max-width" id="discover">
           <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore The cars you might like</p>
           </div>
           <div className="home__filters">
           <SearchBar/>
            <div className="home__filter-container">
               <CustomFilter title="fuel" options={fuels}/>
               <CustomFilter title="year" options={yearsOfProduction}/>
            </div>
           </div>
          
           {allCars ? (
            <div className="home__cars-wrapper">
                 {allCars.map((car) => <CarCard data={car}/>)}
            </div>
           ) : 
           (
            <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
                Oops, no results
            </h2>
            </div>
           )}
         </div>
     </main>
   )
}

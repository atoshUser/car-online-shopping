
import { CustomFilter, SearchBar } from "@/UI";
import { CarCard, Hero } from "@/components";
import { ICarData } from "@/constants";
import { RequestData } from "@/server/get-options";
import {useEffect} from "react"
export default async function Home () {
  

      const dataCars:ICarData[] = await RequestData.getCars()
      console.log(dataCars);
      
       
 

 
    
    
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
               <CustomFilter title="fuel"/>
               <CustomFilter title="year"/>
            </div>
           </div>
          
           {dataCars ? (
            <div className="home__cars-wrapper">
                 {dataCars.map((car) => <CarCard data={car}/>)}
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

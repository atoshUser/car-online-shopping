//"use client"


import { CustomFilter, SearchBar } from "@/UI";
import { CarCard, Hero, ShowMore } from "@/components";
import { ICarData, manufacturers } from "@/constants";
import { IFilterProps, RequestData } from "@/server/get-options";
import React, {useEffect,useState} from "react"
import {yearsOfProduction,fuels} from "@/constants/index"

interface ISearchParams {
  manufacturer:string
  fuel:string
  year:number | string
  limit?:number 
  model?:string
}

 export default async  function Home (searchParams:ISearchParams) {

    
  
//   const [allCars, setAllCars] = useState<ICarData[]>([])
//    const [loading, setloading] = useState<boolean>(false)

// console.log(allCars);

  
// //search states
// const [manufacturer, setmManufacturer] = useState<string>('')
// const [model, setModel] = useState<string>('')


// console.log(model);

// // filter states
// const [fuel,setFuel] = useState('')
// const [year,setYear] = useState(202)

//   // pagination states
// const [limit,setLimit] = useState(10)

   
//    const getCars = async () => {
//     setloading(true)
//       try {
//         const result = await  RequestData.getCars({manufacturer:manufacturer || '',
//         year:year || 2022,
//         fuel:fuel || '',
//         limit:limit || 10,
//        model:model || 'bmw'})
       
//        console.log(result);
       
//         setAllCars(result)
//       } catch (error) {
//         const res = error as Error
//         console.log(res);
//       }finally {
//          setloading(false)
//       }
//    }

//   useEffect(() => {
//     getCars()
//   },[fuel,year,limit,manufacturer,model])
   
  const allCars:ICarData[] = await RequestData.getCars({manufacturer:searchParams.manufacturer || '',
   year:searchParams.year || 2022,
   fuel:searchParams.fuel || '',
   limit:searchParams.limit || 10,model:searchParams.model || ''})

     // const dataCars:ICarData[] = await RequestData.getCars()
     
      
       
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
            <section>
              <div className="home__cars-wrapper">
                 {allCars.map((car) => <CarCard data={car}/>)}
            </div>
            <ShowMore
             pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />

            </section>
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

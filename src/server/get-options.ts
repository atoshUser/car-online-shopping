import axios from 'axios';
import {ICarData} from "@/constants/index"



axios.defaults.baseURL = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/'
axios.defaults.headers['x-rapidapi-key'] = 'a615b4316bmshcc6192b8992a199p175f50jsn5af692bf7190'
axios.defaults.headers['x-rapidapi-host'] = 'cars-by-api-ninjas.p.rapidapi.com'
// const options = {

//   headers: {
//     'X-RapidAPI-Key': 'a615b4316bmshcc6192b8992a199p175f50jsn5af692bf7190',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };


export interface IFilterProps {
  manufacturer:string
  year:number
  fuel:string
  limit:number
  model:string
}



export const RequestData = { 
 
   
  async getCars(filters:IFilterProps){

    const {fuel,limit,manufacturer,model,year,} = filters
   
    const headers = {
      'X-RapidAPI-Key':'a615b4316bmshcc6192b8992a199p175f50jsn5af692bf7190',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{headers:headers})

    const result = await res.json()
    return result
  
  },

  getCarImages(car:ICarData,angle?:string) {
    const url = new URL('https://cdn.imagin.studio/getimage')
    const {make,year,model} = car
    url.searchParams.append('customer','hrjavascript-mastery')
    url.searchParams.append('make',make)
    url.searchParams.append('modelFamily',model.split(' ')[0])
    url.searchParams.append('zoomType','fullscreen')
    url.searchParams.append('modelYear',`${year}`)
    url.searchParams.append('angle',`${angle}`)
    return `${url}`
  }
}
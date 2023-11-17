import axios from 'axios';


axios.defaults.baseURL = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/'
axios.defaults.headers['x-rapidapi-key'] = 'a615b4316bmshcc6192b8992a199p175f50jsn5af692bf7190'
axios.defaults.headers['x-rapidapi-host'] = 'cars-by-api-ninjas.p.rapidapi.com'
// const options = {

//   headers: {
//     'X-RapidAPI-Key': 'a615b4316bmshcc6192b8992a199p175f50jsn5af692bf7190',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

export const RequestData = { 

   
  async getCars(){
    try {
      const {data} = await axios(`cars`,{params:{model:'bmw'}})
      return data
    } catch (error) {
    return  'something went wrong'      
    }
  }
}
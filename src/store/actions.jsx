import axios from "axios";

const API_KEY = "c9b323a281f84eac54c144c62053dc1d"
export const ADD_CITY_DATA='addcitydata'



export const cityWeather = (data) => {
    return {
        type:ADD_CITY_DATA,
        payload:data
    }
}


export const fetchdata = (city, country) => (dispatch, getState) => {
    console.log('info',city, ' ',country)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
    .then(res => {
      console.log(res.data)
      dispatch(cityWeather(res.data))
    })
    .catch(err=> console.log(err))
}
import {createContext} from 'react'

const WeatherContext=createContext({
    Cities:[],
    addCity:(name,temparature)=>{},
})

export default WeatherContext;
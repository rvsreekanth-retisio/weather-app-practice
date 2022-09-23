import React,{useEffect,useContext,useState} from 'react'
import WeatherContext from './WeatherContext';

export default function AverageTemparature(){
    const value=useContext(WeatherContext)
    const [Average,setAverage]=useState(0)
    
    useEffect(()=>{
        if(value.Cities.length<0)
           {
              return(
                <p>You need to add some cities to get an Average Temparature</p>
              )
           }
        let total=0
        for(let i in value.Cities)
           {
               total+=value.Cities[i].temperature
           }
           console.log(total)
        setAverage(total/value.Cities.length  )
    },[value.Cities])
   
    return(
        <div>
               <p style={{"textAlign":"center","fontSize":"20px"}}>The average temperature is <span style={{"fontWeight":"bold","color":"tomato"}}>{Average.toFixed(2)} </span>  degrees Fahrenheit</p>
        </div>
    );
}
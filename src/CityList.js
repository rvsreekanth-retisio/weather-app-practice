import React,{useContext} from 'react'
import WeatherContext from './WeatherContext'
import styled from 'styled-components'

export default function CityList(){
    const value=useContext(WeatherContext)
    console.log(value.Cities)
    return(

       <Container>
     
        <table className='table'>   
            <thead className='thead'>
              <tr className='trHead'>
                <th className='th'>City</th>
                <th className='th'>Temparature</th>
              </tr>  
            </thead> 

            <tbody className='tbody'>
               {value.Cities.map((city,i)=>{

                  return(
                     <tr key={i} className='trBody'>
                        <td className='td'>{city.name}</td>
                        <td className='td'>{city.temperature}</td>
                     </tr>
                  )    
               })}
            </tbody>
        </table>

         
        </Container>   
    )
}

const Container=styled.div`

 .table{
   width:60%;
   margin:auto;
   border-collapse:collapse;
   text-align:center;
   border-radius:10px;
   overflow:hidden;
 }
    
 .thead{
    position:sticky;
    z-index:100;
 }

 .trHead{
    background:TOMATO;
 }

 .th{
    padding:10px;
    color:white;
    text-transform:uppercase;
    font-weight:600;
    font-size:15px;
 }

 .trBody{
    background:white;
 }

 .td{
    padding:10px;
    border:1px solid black;
    font-size:20px;
 }
`;
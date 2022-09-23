import React,{useState} from'react'
import WeatherContext from './WeatherContext';
import AddCities from './AddCities';
import CityList from './CityList';
import AverageTemparature from './AverageTemprature';
import styled from 'styled-components'

function App() {
 

  const [Cities,setCities]=useState([])
  const addCity=(name,temperature)=>{
   
   setCities(prevCties=>[...prevCties,{name,temperature}])

  }

  
  return (
    <Container> 

     <WeatherContext.Provider value={{Cities,addCity}}>
       
        <p className='title'>City Weather App</p>
        <AddCities/>
        <AverageTemparature/>
        <CityList/>
       
        
     </WeatherContext.Provider>
  
     </Container> 
  );
}

export default App;

const Container=styled.div`
  .title{
    font-size:50px;
    text-align:center;
  }

`;
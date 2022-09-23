import React,{useState,useContext} from 'react'
import WeatherContext from './WeatherContext'
import styled from 'styled-components'

export default function AddCities(){
    const [name,setName]=useState('')
    const value=useContext(WeatherContext)

   const submit=(e)=>{
   
    e.preventDefault() 
    console.log(name)
    value.addCity(name,Math.ceil((Math.random()*100)+1))
    setName(' ')
   
}


   const handleChange=(e)=>{
      
      console.log(e.target.value)
      setName(e.target.value)

   }
   
    return(
       
        <Container>

            <form className='form'>
               
                <input type="text" name='city' className='addcity'  onChange={handleChange}/>
                <button onClick={submit} className='button'>ADD</button>
           
            </form>

        </Container>    
      
    )
}

const Container=styled.div`

 .form{
    margin-left:450px;
    margin-bottom:10px; 
   
 }

 .addcity{
    width:300px;
    padding:6px;
    font-size:15px;
 }

 .button{
    width:100px;
    padding:6px;
    font-size:15px;
    color:tomato;
 }
`
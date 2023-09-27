import React from 'react'
import{useState, useEffect} from 'react'
import './Home.css'
import {hoteldetail} from './../../data/data'
import Card from './../../component/Card/Card'
import fivestar from "./Hotel_Entrance_Dusk-e1628830398783.jpg"

const Home = () => {
    
    const [hotels ,setHotel]=useState(hoteldetail);
    const [search , setSearch]= useState('');

    useEffect(()=>{
        const filterHotel = hoteldetail.filter((hotel)=>{
            const name = hotel.name.toLowerCase();
            const address = hotel.address.toLowerCase();
            const contact = hotel.contact.toString();
                
            const query = search.toLowerCase();

            return (name.includes(query) || address.includes(query) || contact.includes(query))
        })

        setHotel(filterHotel);

    },[search])

  return (
    <div>

        <h1 className='titile'>Khushiyon Ka Khazana</h1>

        <input type='text' className='input' placeholder='Search Hotel' value={search}
        onChange={(e) => {setSearch(e.target.value)}}
        />
      <div className='contain'>
        {
            hotels.map((hotel,index)=>{
                const {name,contact,address,img}=hotel;
                
                return (
                     
                         <Card img={img} key={index} name={name} contact={contact} address={address} /> 
                 
                )
                    }
            )
        }
        
      </div>
      {
         
           hotels.length === 0 ? <h2 className='not-found'>Hotel Not found</h2> : null
        
      }
    </div>
   
  )
}

export default Home

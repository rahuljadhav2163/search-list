import React from 'react'
import{useState, useEffect} from 'react'
import './Home.css'
import {hoteldetail} from './../../data/data'
import Card from './../../component/Card/Card'

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
                const {name,contact,address}=hotel;
                
                return (
                     
                         <Card key={index} name={name} contact={contact} address={address}/> 
                 
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

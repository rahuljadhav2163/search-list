import React from 'react'
import "./Card.css"

function Card({name,address,contact}) {
  return (
    <div className='card-container'>

        <h1>{name}</h1>
        <h3>{address}</h3>
        <h6 className='mob-no'>📳{contact}</h6>
      
    </div>
  )
}

export default Card


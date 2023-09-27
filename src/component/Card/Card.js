import React from 'react'
import "./Card.css"

function Card({ name, address, contact, img }) {
  return (
    <div className='card-container'>
      <img className='img-hotel' src={img} />
      <h1 className='htel-name'>{name}</h1>
      <h3>{address}</h3>
      <h6 className='mob-no'>📳{contact}</h6>

    </div>
  )
}

export default Card


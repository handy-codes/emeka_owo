import React from 'react'
import "./product.css"

const Product = ({img, link}) => {
  return (
    <div className='p drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt="" className="p-img" />
        </a>
    </div>
    
  )
}

export default Product
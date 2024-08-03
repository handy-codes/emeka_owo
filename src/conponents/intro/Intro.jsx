import React from 'react'
import "./intro.css"
import owobest from "../../images/owopos.jpg"

function Intro() {
  return (
    <div className='i p-4'>
     <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className="i-name">Emeka Owo</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Mobile App Developer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc text-sm font-semibold">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services
            and online stores.
          </p>
        </div>
     </div>
     <div className="i-right">
      <div className="i-bg"></div>
      <img src={owobest} alt="" className="i-img" />
     </div>
    </div>
  )
}

export default Intro
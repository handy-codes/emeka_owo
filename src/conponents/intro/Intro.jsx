import React from 'react'
import "./intro.css"
import owobest from "../../images/owopos.jpg"

function Intro() {
  return (
    <div className='i p-2 max-w-fit mx-auto'>
     <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className="i-name">Emeka Owo</h1>
          <div className="i-title">
            <div className="i-title-wrapper flex flex-col">
              <div className="i-title-item text-center mx-auto">Web Developer</div>
              <div className="i-title-item text-center mx-auto">UI/UX Designer</div>
              <div className="i-title-item text-center mx-auto">Web App Dev</div>
              <div className="i-title-item text-center mx-auto">Writer</div>
              <div className="i-title-item text-center mx-auto">Content Creator</div>
            </div>
          </div>
          <p className="i-desc text-[18px] font-semibold">
            I design and develop digital products for clients of all sizes,
            specializing in creating stylish, modern web applications
            and online stores.
          </p>
        </div>
     </div>
     <div className="i-right sm:max-w-2xl sm:mx-[70px]">
      <div className="i-bg bg-lime-950"></div>
      {/* <div className="i-bg bg-[#1D2935]"></div> */}
      <img src={owobest} alt="" className="i-img" />
     </div>
    </div>
  )
}

export default Intro
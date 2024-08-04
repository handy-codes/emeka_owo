import React from 'react'
import "./about.css"
import udemy from "../../images/udemy_cert.jpg"



const About = () => {
  return (
    <div className='a p-2 mb-6 md:items-center md:my-[10%] lg:my-[2%]'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                {/* <img src="https://images.pexels.com/photos/4559667/pexels-photo-4559667.jpeg?auto=compress&cs=tinysrgb&w=600" alt="developer"  */}
                <img className="a-img shadow-2xl" src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/fintech.png" alt="developer"                 
                 />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub text-[17px] font-semibold">
                As a React developer, I find it convenient to create SPAs with React's re-usable components.
                I am also researching React Native for developing cross-plaform mobile applications. With 
                a background in Economics and Banking, working on Fintech products is an easy win. 
                Lead project is <a className='a-saver text-blue-900' href="https://esaver.netlify.app/">eSaver</a> - a work-in-progress which will be a convenient daily-savings app. 
            </p>
            <p className="a-desc text-sm font-semibold">
                 Depending on the employer's assessment of my current skill set, I am open to Fulltime, Remote or Intern opportunites to learn
                 more on the job.               
            </p>
            <div className="a-award">
                    <img src={udemy} alt="award" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Frontend Developer</h4>
                        <p className="a-award-desc">
                            Training at Udemy Inc. has equipped me with a good grasp of the color theory and typography as well as 
                            the skillful use of the Flexbox system for creating stunning layouts and interfaces.  
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About


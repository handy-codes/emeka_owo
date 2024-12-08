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
                I am a Fullstack Developer and Trainer - using Javascript all the way.
                I use Reactjs, Vite and Nextjs for the frontend and Nodejs at the backend.
                Both in-demand stacks are very useful for creating modern, fast and scalable web
                aplications.
                {/* Lead project is <a className='a-saver text-blue-900' href="https://esaver.netlify.app/">eSaver</a> - a work-in-progress which will be a convenient daily-savings app.  */}
            </p>
            <p className="a-desc text-sm font-semibold inline-block">
            <a className='text-blue-700 underline' href="https://www.udemy.com/" target="_blank" rel='noreferrer'>Udemy</a> certified, <a className='text-blue-700 underline' href="http://ude.my/UC-f0b5e41c-dc75-498d-b354-fd3fad774fc7" target="_blank" rel='noreferrer'>certificate link here</a>, I am open to Fulltime, Remote or Part-time roles both as a Developer and/or an Instructor.
            </p>
            <div className="a-award">
                    <a href="http://ude.my/UC-f0b5e41c-dc75-498d-b354-fd3fad774fc7" target="_blank" rel='noreferrer'><img src={udemy} alt="award" className="a-award-img" /></a>
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

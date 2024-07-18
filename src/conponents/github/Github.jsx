import React from 'react'
import "./github.css"
import githu from "../../images/githubt.png"

const Github = () => {
  return (
    <div class="githubContainer">
     <h1 class="githubTitle">Want to see my Projects?</h1>
     <div class="githubChart">
        <div class="dates">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
        </div>
        <div class="boxContainer">                    
        </div>
        <div class="align">
            <a href="https://github.com/handy-codes">
                <div class="github">
                {/* <img src="" alt="" className="logo" /> */}
                <img src={githu} class="logo" alt="github"/>

                </div>
            </a> 
        </div>
        <h1 class="githubTitle">ON GITHUB</h1>
    </div>
    <div class="githubSm">
        <a href="https://github.com/handy-codes">
           <div class="github">
            <img src={githu} class="logo" alt="github"/>
           </div>
        </a>
        <h2>Find me On Github</h2>
    </div>
</div>
  )
}

export default Github
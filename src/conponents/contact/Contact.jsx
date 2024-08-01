import React, { useContext, useRef, useState } from 'react'
import "./contact.css"
import phone from "../../images/phone.png"
import email from "../../images/email.jpeg"
import linkedin from "../../images/linkedin_logo.png"
import github2 from "../../images/github2.png"
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context'


const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
 

    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs
      .sendForm(
        'service_ejo31uf', 
        'template_5vfqc34', 
        formRef.current, {
        publicKey: 'vGQGcgWdK3AS7pNJM'
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={phone} alt="phone_logo" className="c-icon" />
                        +2349038984567
                    </div>
                    <div className="c-info-item">
                        <img src={email} alt="email_logo" className="c-icon" />
                        paxymekventures@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={linkedin} alt="linkedin_logo" className="c-icon" />
                        <a href="https://www.linkedin.com/in/emeka-owo-204aaa2a5">www.linkedin.com/in/emeka-owo-204aaa2a5</a> 
                    </div>    
                    <div className="c-info-item">
                        <img src={github2} alt="github_logo" className="c-icon" />
                        <a href="https://github.com/handy-codes">www.github.com/handy-codes</a>
                    </div>                  
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    What's your project? Get in touch. Always
                    freelancing if the right project comes along.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#3333"}} type="text" placeholder='Name' name='user_name'  />
                    <input style={{backgroundColor: darkMode && "#3333"}} type="text" placeholder='Subject' name='user_subject'  />
                    <input style={{backgroundColor: darkMode && "#3333"}} type="text" placeholder='Email' name='user_email'  />
                    <textarea style={{backgroundColor: darkMode && "#3333"}} name="message" placeholder='Message' rows="5"></textarea>
                    {/* <input type="submit" value="Send" /> */}
                    <button>Submit</button>
                    {done && "thank you..." }
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
import React, { useContext, useRef, useState } from 'react'
import "./contact.css"
import phone from "../../images/phone.png"
import email from "../../images/email.jpeg"
import linkedin from "../../images/linkedin_logo.png"
import github2 from "../../images/github2.png"
import { ThemeContext } from '../../context'


const Contact = () => {

    const formRef = useRef();
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const onChange = (e) => {
      setMessage(e.target.value);
    };
    const onChangeSubject = (e) => {
      setSubject(e.target.value);
    };
    console.log(message);
    console.log(subject);

    const sendMail = () =>{
    window.location = `mailto:paxymekventures@gmail.com?subject=${subject}&body=${message}`
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMail();
        setSubject('');
        setMessage('');     
        return;
    }
    


  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper sm:gap-5">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info text-xl font-bold mr-4">
                    <div className="c-info-item text-[18px] sm:text-[20px] font-bold hover:text-[#964e0f] hover:translate-x-1 duration-300">
                        <img src={phone} alt="phone_logo" className="c-icon rounded-full" />
                        +2349038984567
                    </div>
                    <div className="c-info-item text-[18px] font-bold sm:text-[20px] hover:text-[#964e0f] hover:translate-x-1 duration-300">
                        <img src={email} alt="email_logo" className="c-icon rounded-full border border-blue" />
                        paxymekventures@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={linkedin} alt="linkedin_logo" className="c-icon rounded-full border border-blue-700" />
                        <a className='text-[18px] font-bold underline sm:text-[20px] text-blue-600 hover:text-[#964e0f] hover:translate-x-1 duration-300' href="https://www.linkedin.com/in/emeka-owo-204aaa2a5">www.linkedin.com/in/emeka-owo-204aaa2a5</a> 
                    </div>    
                    <div className="c-info-item">
                        <img src={github2} alt="github_logo" className="c-icon rounded-full" />
                        <a className='text-[18px] font-bold underline sm:text-[20px] text-blue-600 hover:text-[#964e0f] hover:translate-x-1 duration-300' href="https://github.com/handy-codes">www.github.com/handy-codes</a>
                    </div>                  
                </div>
            </div>
            <div className="c-right p-4">
                <p className="c-desc inline text-[18px] font-bold sm:text-[20px]">
                    What's your project? Get in touch. Always
                    freelancing if the right project comes along.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input className='w-[100%] outline-none' onChange={onChangeSubject} required style={{backgroundColor: darkMode && "white", color:'black'}} type="text" placeholder='Subject' name='user_subject' value={subject} />
                    <textarea className='textArea border border-black my-3 outline-none' onChange={onChange} required style={{backgroundColor: darkMode && "white", color:'black'}} name="message" value={message} placeholder='Message' rows="5"></textarea>
                    {/* <input type="submit" value="Send" /> */}
                    <button 
                        disabled={subject.trim() === '' || message.trim() === ''}
                        className='bg-[#0B60B0] text-white hover:opacity-90 rounded-lg p-1 w-[70%] font-bold max-w-xs mx-auto disabled:opacity-50'>
                            Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
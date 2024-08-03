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
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info text-xl font-bold mr-4">
                    <div className="c-info-item text-[17px] font-bold">
                        <img src={phone} alt="phone_logo" className="c-icon rounded-full" />
                        +2349038984567
                    </div>
                    <div className="c-info-item text-[17px] font-bold">
                        <img src={email} alt="email_logo" className="c-icon rounded-full border border-blue" />
                        paxymekventures@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={linkedin} alt="linkedin_logo" className="c-icon rounded-full border border-blue-700" />
                        <a className='text-[17px] font-bold underline' href="https://www.linkedin.com/in/emeka-owo-204aaa2a5">www.linkedin.com/in/emeka-owo-204aaa2a5</a> 
                    </div>    
                    <div className="c-info-item">
                        <img src={github2} alt="github_logo" className="c-icon rounded-full" />
                        <a className='text-[17px] font-bold underline' href="https://github.com/handy-codes">www.github.com/handy-codes</a>
                    </div>                  
                </div>
            </div>
            <div className="c-right p-4">
                <p className="c-desc">
                    What's your project? Get in touch. Always
                    freelancing if the right project comes along.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input className='w-[100%] outline-none' onChange={onChangeSubject} required style={{backgroundColor: darkMode && "whitesmoke"}} type="text" placeholder='Subject' name='user_subject' value={subject} />
                    <textarea className='textArea border my-3 outline-none' onChange={onChange} required style={{backgroundColor: darkMode && "whitesmoke"}} name="message" value={message} placeholder='Message' rows="5"></textarea>
                    {/* <input type="submit" value="Send" /> */}
                    <button className='bg-slate-900 text-white rounded-lg p-1'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
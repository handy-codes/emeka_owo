import "./toggle.css"
import sun from "../../images/sun.jpeg"
import { useContext } from "react"
import { ThemeContext } from "../../context"
// import sun from "../../images/sun.jpeg"


const Toggle = () => {

  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <>
    <div className='t'>
        <img src={sun} alt="" className="t-icon" />
        <img src={sun} alt="" className="t-icon" />
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
    </>
  )
}

export default Toggle
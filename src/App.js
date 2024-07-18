import { useContext } from "react";
import About from "./conponents/about/About";
import Contact from "./conponents/contact/Contact";
import Intro from "./conponents/intro/Intro";
import ProductList from "./conponents/productList/ProductList";
import Toggle from "./conponents/toggle/Toggle";
import { ThemeContext } from "./context";
import Github from "./conponents/github/Github";

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div style={{backgroundColor:darkMode ? "black" : "white", color: darkMode && "white"}}>
        <Toggle/>
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>
        {/* <Github/> */}
    </div>
  );
}

export default App;

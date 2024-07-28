import { useState } from "react";
import Games from "./games";
import home_icon from "./home-icon.svg"
import Footer from "./footer";
function App() {
  const [stickNav,setStickNav]=useState(false)
  const observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ 
        if (!entry.isIntersecting){
            setStickNav(true)
        }
        else{
            setStickNav(false)
        }
    });
    
  });
  setTimeout(()=>{
    observer.observe(document.querySelector(".hero-txt"));
  },100)
  return (
    <>
      <header>
            <div className="logo"><img src={home_icon} alt="logo"/></div>
            <div className="more-options">
                <button className="btn-dark">Download @v0.3</button>
            </div>
        </header>
      <div className="wrapper">
          <div className="hero-txt">
              <h1 className="large-txt">High Quality JavaScript  Games</h1>
              <p>High quality Javascript games made with plain ,simple and understandable code , just check it out !</p>
          </div>
          <div className="custom-filter">
                <div className="header" id={stickNav ? "show-header":"hide-header"}>
                    <ul className="filter">
                        <li className="active">All&nbsp;Games</li>
                        <li>Puzzle</li>
                        <li>Reaction</li>
                        <li>Analytical</li>
                        <li>Strategical</li>
                    </ul>
                </div> 
                <ul className="games">
                  <Games/>
                </ul>
            </div>

      </div>
      <Footer/>
    </>
  );
}

export default App;

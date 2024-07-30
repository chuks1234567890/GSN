import React, { useState } from 'react'
import Games from './games'
const Home = () => {
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
  )
}

export default Home
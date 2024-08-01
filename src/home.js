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
              <h1 className="large-txt">Explore cool web games on <span className="bac">J</span><span className="bac">S</span><span className="bac">G</span><span className="bac">A</span><span className="bac">M</span><span className="bac">E</span><span className="bac">S</span><span className="bac"></span><span className="bac">I</span><span className="bac">O</span></h1>
              <p className='text-phrase'>Explore a bit sized HTML5 games on jsgames.io , view more value we offer by hitting the get started button just check it out!</p>
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
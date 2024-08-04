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
              <h1 className="large-txt">Explore the gaming world on <span className="bac">G</span><span className="bac">A</span><span className="bac">M</span><span className="bac">E</span><span className="bac">S</span><span className="bac">T</span><span className="bac">A</span><span className="bac">C</span><span className="bac">K</span></h1>
              <p className='text-phrase'>Explore a bit sized HTML5 games on gamestack.store ,  hit the get started button to explore up to 20+ <span className='opensource'>open-source</span> licensed  games</p>
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
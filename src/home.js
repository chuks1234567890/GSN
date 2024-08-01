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
              <h1 className="large-txt">Explore the gaming world on <span class="bac">J</span><span class="bac">S</span><span class="bac">G</span><span class="bac">A</span><span class="bac">M</span><span class="bac">E</span><span class="bac">S</span><span class="bac"></span><span class="bac">I</span><span class="bac">O</span></h1>
              <p className='text-phrase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim similique ea nisi officiis, error consectetur? Natus rerum voluptates dicta nisi, recusandae saepe in? Aliquid, voluptas!</p>
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
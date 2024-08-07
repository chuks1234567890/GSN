import React from 'react'
import Link, { useNavigate } from 'react-router-dom'

const Games = () => {
    const navigator=useNavigate()
    const browseRoute=(myRoute)=>{
        navigator(`games/${myRoute}`)
        let videoEle = document.querySelector('video');
        enterFullScreen(videoEle);
        
    }
    
        function enterFullScreen(element) {
            if(element.requestFullscreen) {
            element.requestFullscreen();
            }else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();     // Firefox
            }else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();  // Safari
            }else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();      // IE/Edge
            }
        };
        
       
        
        document.addEventListener('fullscreenchange', (event) => {
            if (document.fullscreenElement) {
            console.log('Entered fullscreen:', document.fullscreenElement);
            } else {
            console.log('Exited fullscreen.');
            }
        });
    const game_details=[
        {
            game_title:"SLIDING PUZZLE",
            game_detail:"Slide boxes into their correct order",
            game_route:"Sliding_Puzzle_game"
            
        },
        {
            game_title:"SNAKE GAME",
            game_detail:"Avoid walls swipe left / right / up / down to change direction",
            game_route:"Snake_game"
        },
        {
            game_title:"SOUND MEMORY",
            game_detail:"See how long you can complete the sequence to button pressed",
            game_route:"Simon_game"
        },
        {
            game_title:"NUMBER SLIDE",
            game_detail:"Slide tiles with same number until you reach 2048",
            game_route:"master-2048"
        },
        {
            game_title:"WATER SORT GAME",
            game_detail:"Pour water between tubes until its filled with one color",
            game_route:"Water_sort_game"
        },
        {
            game_title:"HANGMAN GAME",
            game_detail:"Guess all the letters to make up to world before you hang",
            game_route:"hangman"
        },
        {
            game_title:"CARD MEMORY",
            game_detail:"FLip two cards and find pairs before you exceed your flips",
            game_route:"Card_memory"
        },
        {
            game_title:"TOWER STACK",
            game_detail:"Lorem ipsum dolor sit appet kdkd dd",
            game_route:"Speed_typing_game"
        },
        // {
        //     game_title:"WORD GUESSING",
        //     game_detail:"Lorem ipsum dolor sit appet kdkd dd",
        //     game_route:"Word_guessing_game"
        // },
        {
            game_title:"BOUNCING BALL",
            game_detail:"Lorem ipsum dolor sit appet kdkd dd",
             game_route:"coloron_game"
        },
        // {
        //     game_title:"PACMAN GAME",
        //     game_detail:"Lorem ipsum dolor sit appet kdkd dd",
        //      game_route:"pacman_game"
        // },
        {
            game_title:"FLAPPY BIRD",
            game_detail:"Lorem ipsum dolor sit appet kdkd dd",
            game_route:"flappy_bird"
        },
        // {
        //     game_title:"SIMPLE MATHS",
        //     game_detail:"Lorem ipsum dolor sit appet kdkd dd",
        //     game_route:"flappy_bird"
        // }
    ]
   const render_games=game_details.map(item=>(
    <li key={item.game_title} onClick={()=>browseRoute(item.game_route)}>
        <div className={`game-holder image-${item.game_route}`}>
            <div className={`image-holder ${item.game_route}`}></div>
            <div className="play-details">
                <div className="details-holder">
                    <div className="game-detail">
                        <span className='games-description'>{item.game_detail}</span>
                        <h2>{item.game_title}</h2>
                    </div>
                    <div className="btn">
                        
                    </div>
                </div>
            </div>
        </div>
    </li>
   ))
    return (
        <>
        {render_games}
        </>
    )
}

export default Games
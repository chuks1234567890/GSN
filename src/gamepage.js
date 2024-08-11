import React from 'react'
import Link, { useNavigate } from 'react-router-dom'
const GamePage = () => {
    const navigator=useNavigate()
  return (
    <div className='gamePage'>
        <div className="score-board">
            <div className="board-details">
                <button onClick={()=> navigator("/")}>Back</button>
                <div className="score-details">
                    <div className="scores">
                        <span className="span1">BEST</span>
                        <span>200</span>
                    </div>
                    <div className="scores">
                        <span className="span1">SCORE</span>
                        <span>20</span>
                    </div>
                </div>
            </div>
        </div>
        <iframe allow='autoplay' className='iframe ' title='Sliding Puzzle' src='https://chuks1234567890.github.io/jsgames.io/slidpuzzle/'>

        </iframe>
    </div>
  )
}

export default GamePage
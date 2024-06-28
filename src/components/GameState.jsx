import { useEffect, useState } from "react"
import { GamePieces } from "./GamePieces";

export const GameState = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(parseInt(localStorage.getItem('highScore')) || 0);
  const [gameOver, setGameOver] = useState(false);
  const [collision, setCollisionType] = useState('');

  const handleGameOver = (type) => {
    setGameOver(true)

    if(score > highScore){
      setHighScore(score)
      localStorage.setItem('highscore', score.toString())
    }

    setCollisionType(type)
  }
  
  const handleResetGame = () => {
    setScore(0)
    setGameOver(false)
  }

  useEffect(()=> {
    const handleKeyPress = (e) => {
      if(gameOver && e.key === 'Enter') {
        handleResetGame()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
  }, [gameOver])



  return (
    <>
      <div className="flex gap-40 mb-4">
        <p className="font-bold text-xl text-fandango">Score: {score}</p>
        <p className="font-bold text-xl text-fandango">High Score: {highScore}</p>
      </div>
      {
        gameOver && (
          <div className="mt-12 flex flex-col items-center justify-center">
            <p className=" font-extrabold text-2xl text-dark-blue">{collision === 'wall' ? 'Bonk!' : "Don't eat yourself!"}</p>
            <p className="text-chrysler-blue">Game Over</p>
            <p className="text-chrysler-blue">Press enter to reset the game</p>
          </div> 
        )
      }{
        !gameOver && (
          <GamePieces 
            score={score}
            setScore={setScore}
            onGameOver={(type) => handleGameOver(type)}
          />
        )
      }
    </>
  )
}
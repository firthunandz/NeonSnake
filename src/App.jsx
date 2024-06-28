import { useState, useEffect } from 'react'
import { GameState } from './components/GameState'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const App = () => {


  return (
    <div className='bg-background'>
      <div className='container mx-auto flex flex-col items-center min-h-screen w-full overflow-hidden'>
        <Header />
        <GameState />
      </div>
    </div>
  )
}

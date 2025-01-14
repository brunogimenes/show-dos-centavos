import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './home/HomePage'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css';
import { GamePage } from './game/GamePage';
import { GameOverPage } from './game-over/GameOverPage';
import { LeaderBoardPage } from './leaderboard/LeaderBoardPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/game-over" element={<GameOverPage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

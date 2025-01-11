import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './home/HomePage'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css';
import { GamePage } from './game/GamePage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

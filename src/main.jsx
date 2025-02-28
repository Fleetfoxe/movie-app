import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import MovieDetails from './pages/MovieDetails.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="movie/:MovieId" element={<MovieDetails />} />
    </Routes>
    </StrictMode>
  </BrowserRouter>
)

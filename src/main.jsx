import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './Pages/About/About.jsx';
import ContentUs from './Pages/ContentUs/ContentUs.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contentus" element={<ContentUs />} />
    </Routes>
  </BrowserRouter>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import Menu from './Menu.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
      <Menu/>
    </StrictMode>
  </BrowserRouter>,
)

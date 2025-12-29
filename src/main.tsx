import { StrictMode } from 'react';
import { CookiesProvider } from "react-cookie";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/components/App.tsx';
import './index.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

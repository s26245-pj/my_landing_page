import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import AppRouter from './routes/AppRouter';
import './i18n'; 
import { LanguageProvider } from './contexts/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <AppRouter />
      </LanguageProvider>
  </React.StrictMode>
);

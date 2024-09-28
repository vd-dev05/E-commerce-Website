import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/AppContent.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AppProvider>

        <App />
      </AppProvider>
    </Router>
  </StrictMode>,
)

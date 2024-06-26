import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.sass'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

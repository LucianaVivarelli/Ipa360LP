import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.sass'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.jsx';
import 'animate.css/animate.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

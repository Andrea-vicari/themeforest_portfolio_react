import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import '../src/Components/styles/about-style.css'
import '../src/Components/styles/cta-style.css'
import '../src/Components/styles/features-style.css'
import '../src/Components/styles/news-style.css'
import '../src/Components/styles/portfolio-style.css'
import '../src/Components/styles/contact-style.css'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

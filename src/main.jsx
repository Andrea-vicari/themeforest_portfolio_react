import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Components CSS
import '../src/Components/styles/about-style.css'
import '../src/Components/styles/cta-style.css'
import '../src/Components/styles/cta-small-style.css'
import '../src/Components/styles/services-style.css'
import '../src/Components/styles/news-style.css'
import '../src/Components/styles/portfolio-style.css'
import '../src/Components/styles/contact-style.css'

// Main CSS
import './assets/css/index.scss'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import store from './redux/store.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
  </Provider>,
)

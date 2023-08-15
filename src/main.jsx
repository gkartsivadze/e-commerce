import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './directories/Home.jsx'
import ProductPreview from './directories/ProductPreview.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
        <Route path='product' element={<ProductPreview />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

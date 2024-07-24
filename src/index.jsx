import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './styles/stylesglobal.scss'
import Home from './pages/Home/home'
import HousingForm from './pages/Accommodation_sheet/accommodations'
import About from './pages/About_page/aboutpage'
import Error from './pages/Error/error'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
   <React.StrictMode>
      <Router>
         <div className="app">
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/accommodation/:id" element={<HousingForm />} />
               <Route path="/A-Propos" element={<About />} />
               <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   </React.StrictMode>
)

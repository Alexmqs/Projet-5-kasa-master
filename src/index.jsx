import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './styles/stylesglobal.scss'
import Home from './pages/Home/home'
import HousingForm from './pages/Accommodation_sheet/Accommodationsheet'
import About from './pages/About_page/Aboutpage'
import Error from './pages/Error/error'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Housing-form" element={<HousingForm />} />
            <Route path="/A-Propos" element={<About />} />
            <Route path="*" element={<Error />} />
         </Routes>
         <Footer />
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
)

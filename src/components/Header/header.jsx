import { Link } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/KasaRedLogo.png'

function Header() {
   return (
      <header className="header">
         <div className="header__logo">
            <img src={logo} alt="Kasa Logo" />
         </div>
         <nav className="header__nav">
            <Link to="/" className="header__link">
               Accueil
            </Link>
            <Link to="/A-Propos" className="header__link">
               A Propos
            </Link>
         </nav>
      </header>
   )
}

export default Header

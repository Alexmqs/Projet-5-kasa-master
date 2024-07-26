import { NavLink } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/KasaRedLogo.png'

// Gestion de l'en-tête et du lien actif sur la page
function Header() {
   return (
      <header className="header">
         <div className="header__logo">
            <img src={logo} alt="Kasa Logo" />
         </div>
         <nav className="header__nav">
            <NavLink
               to="/"
               className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}
            >
               Accueil
            </NavLink>
            <NavLink
               to="/A-Propos"
               className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}
            >
               A propos
            </NavLink>
         </nav>
      </header>
   )
}

export default Header

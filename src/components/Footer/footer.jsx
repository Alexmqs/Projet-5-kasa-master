import './footer.scss'
import logo from '../../assets/KasaWhiteLogo.png'

function Footer() {
   return (
      <footer className="footer">
         <div className="footer__logo">
            <img src={logo} alt="Kasa Logo" />
         </div>
         <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </footer>
   )
}

export default Footer

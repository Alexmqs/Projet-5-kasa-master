import Banner from '../../components/Banner/banner'
import backgroundImage from '../../assets/Bannerabout.png'
import './aboutpage.scss'

function About() {
   return (
      <div className="About__style">
         <Banner
            backgroundImage={backgroundImage}
            text="Chez vous, partout et ailleurs"
            height="200px"
         />
      </div>
   )
}

export default About

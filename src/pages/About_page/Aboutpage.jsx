import Banner from '../../components/Banner/banner'
import backgroundImage from '../../assets/Bannerabout.png'
import Collapse from '../../components/Collapse/collapse'
import './aboutpage.scss'

function About() {
   return (
      <div className="About__style">
         <Banner backgroundImage={backgroundImage} height="200px" />
         <div className="collapses">
            <Collapse
               title="Fiabilité"
               content={
                  <p>
                     Les annonces postées sur Kasa garantissent une fiabilité
                     totale. Les photos sont conformes aux logements, et toutes
                     les informations sont régulièrement vérifiées par nos
                     équipes.
                  </p>
               }
               width="80%"
            />
            <Collapse
               title="Respect"
               content={
                  <p>
                     La bienveillance fait partie des valeurs fondatrices de
                     Kasa. Tout comportement discriminatoire ou de perturbation
                     du voisinage entraînera une exclusion de notre plateforme.
                  </p>
               }
               width="80%"
            />
            <Collapse
               title="Service"
               content={
                  <p>
                     La bienveillance fait partie des valeurs fondatrices de
                     Kasa. Tout comportement discriminatoire ou de perturbation
                     du voisinage entraînera une exclusion de notre plateforme.
                  </p>
               }
               width="80%"
            />
            <Collapse
               title="Sécurité"
               content={
                  <p>
                     La sécurité est la priorité de Kasa. Aussi bien pour nos
                     hôtes que pour les voyageurs, chaque logement correspond
                     aux critères de sécurité établis par nos services. En
                     laissant une note aussi bien à l'hôte qu'au locataire, cela
                     permet à nos équipes de vérifier que les standards sont
                     bien respectés. Nous organisons également des ateliers sur
                     la sécurité domestique pour nos hôtes.
                  </p>
               }
               width="80%"
            />
         </div>
      </div>
   )
}
export default About

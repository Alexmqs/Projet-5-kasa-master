import Banner from '../../components/Banner/banner'
import backgroundImage from '../../assets/Bannerabout.png'
import Collapse from '../../components/Collapse/collapse'
import './aboutpage.scss'

//Page À propos composée d'une bannière et de collapses
function About() {
   return (
      <div className="About">
         <Banner
            backgroundImage={backgroundImage}
            text=""
            bannerClass="About__banner"
            imgClass="About__img"
            textClass="About__text"
         />
         <div className="About__collapses">
            <Collapse
               title="Fiabilité"
               collapseClass="About__collapseClass"
               collapseheaderClass="About__collapseheaderClass"
               content={
                  <p>
                     Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos
                     sont conformes aux logements, et toutes les informations sont régulièrement
                     vérifiées par nos équipes.
                  </p>
               }
            />
            <Collapse
               title="Respect"
               collapseClass="About__collapseClass"
               collapseheaderClass="About__collapseheaderClass"
               content={
                  <p>
                     La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
                     discriminatoire ou de perturbation du voisinage entraînera une exclusion de
                     notre plateforme.
                  </p>
               }
            />
            <Collapse
               title="Service"
               collapseClass="About__collapseClass"
               collapseheaderClass="About__collapseheaderClass"
               content={
                  <p>
                     La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
                     discriminatoire ou de perturbation du voisinage entraînera une exclusion de
                     notre plateforme.
                  </p>
               }
            />
            <Collapse
               title="Sécurité"
               collapseClass="About__collapseClass"
               collapseheaderClass="About__collapseheaderClass"
               content={
                  <p>
                     La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
                     voyageurs, chaque logement correspond aux critères de sécurité établis par nos
                     services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet
                     à nos équipes de vérifier que les standards sont bien respectés. Nous
                     organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                  </p>
               }
            />
         </div>
      </div>
   )
}
export default About

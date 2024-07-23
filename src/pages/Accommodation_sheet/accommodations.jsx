import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import logements from '../../logements.json'
import Carrousel from '../../components/Carrousel/carrousel'
import Collapse from '../../components/Collapse/collapse'
import './accommodations.scss'

function HousingForm() {
   const { id } = useParams()
   const navigate = useNavigate()
   const accommodation = logements.find((logement) => logement.id === id)
   useEffect(() => {
      if (!accommodation) {
         navigate('/Erreur')
      }
   }, [accommodation, navigate])

   if (!accommodation) {
      return null
   }

   const equipmentContent = accommodation.equipments.map((equipment, index) => (
      <span key={index}>
         {equipment}
         <br />
      </span>
   ))
   const renderStars = (rating) => {
      const stars = []
      for (let i = 1; i <= 5; i++) {
         if (i <= rating) {
            stars.push(
               <FontAwesomeIcon
                  key={i}
                  icon={solidStar}
                  className="star star--filled"
               />
            )
         } else {
            stars.push(
               <FontAwesomeIcon
                  key={i}
                  icon={solidStar}
                  className="star star--empty"
               />
            )
         }
      }
      return stars
   }

   return (
      <div className="accommodation">
         <Carrousel pictures={accommodation.pictures} />
         <div className="accommodation__titlegroup">
            <div className="accommodation__titleloc">
               <h1>{accommodation.title}</h1>
               <p>{accommodation.location}</p>
            </div>
            <div className="accommodation__host">
               <p>{accommodation.host.name}</p>
               <img
                  src={accommodation.host.picture}
                  alt={`${accommodation.host.name} profile`}
               />
            </div>
         </div>
         <div className="accommodation__tagsrating">
            <div className="accommodation__tags">
               {accommodation.tags.map((tag, index) => (
                  <span key={index} className="accommodation__tag">
                     {tag}
                  </span>
               ))}
            </div>
            <div className="accommodation__rating">
               {renderStars(accommodation.rating)}
            </div>
         </div>
         <div className="accommodation__collapse">
            <Collapse
               title="Description"
               content={<p>{accommodation.description}</p>}
               className="accommodation__collapse--description"
            />
            <Collapse
               title="Equipement"
               content={<p>{equipmentContent}</p>}
               className="accommodation__collapse--equipment"
            />
         </div>
      </div>
   )
}

export default HousingForm

import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import logements from '../../logements.json'
import Carrousel from '../../components/Carrousel/carrousel'
import Collapse from '../../components/Collapse/collapse'
import './accommodations.scss'

function HousingForm() {
   const { id } = useParams()
   const navigate = useNavigate()
   const accommodation = logements.find((logement) => logement.id === id)
   const equipmentContent = accommodation.equipments.map((equipment, index) => (
      <span key={index}>
         {equipment}
         <br />
      </span>
   ))
   useEffect(() => {
      if (!accommodation) {
         navigate('/Erreur')
      }
   }, [accommodation, navigate])

   if (!accommodation) {
      return null
   }

   return (
      <div className="accommodation__sheet">
         <Carrousel pictures={accommodation.pictures} />
         <h1>{accommodation.title}</h1>
         <p>{accommodation.location}</p>
         <div className="accommodation__host">
            <img
               src={accommodation.host.picture}
               alt={`${accommodation.host.name} profile`}
            />
            <p>{accommodation.host.name}</p>
         </div>
         <p>{accommodation.tags}</p>
         <p>{accommodation.rating}</p>

         <Collapse
            title="Description"
            content={<p>{accommodation.description}</p>}
         />
         <Collapse title="Equipement" content={<p>{equipmentContent}</p>} />
      </div>
   )
}

export default HousingForm

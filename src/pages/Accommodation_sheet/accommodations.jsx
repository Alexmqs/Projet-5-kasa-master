import React from 'react'
import { useParams } from 'react-router-dom'

function HousingForm() {
   const { id } = useParams()
   return <div>Fiche de logement 🏡 pour ID: {id}</div>
}

export default HousingForm

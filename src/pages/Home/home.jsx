import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/banner'
import Card from '../../components/Card/card'
import backgroundImage from '../../assets/Bannerhome.png'
import logements from '../../logements.json'
import './home.scss'
import { useNavigate } from 'react-router-dom'

function Home() {
   const [accommodations, setAccommodations] = useState([])
   const navigate = useNavigate()

   useEffect(() => {
      setAccommodations(logements)
   }, [])

   const handleCardClick = (id) => {
      navigate(`/accommodation/${id}`)
   }

   return (
      <div className="home">
         <Banner
            backgroundImage={backgroundImage}
            text="Chez vous, partout et ailleurs"
            textClass="home__text"
            bannerClass="home__banner"
         />
         <div className="home__background">
            <div className="home__card">
               {accommodations.map((accommodation) => (
                  <Card
                     key={accommodation.id}
                     onClick={() => handleCardClick(accommodation.id)}
                     title={accommodation.title}
                     cover={accommodation.cover}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Home

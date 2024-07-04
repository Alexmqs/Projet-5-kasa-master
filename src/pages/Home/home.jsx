import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/banner'
import Card from '../../components/Card/card'
import backgroundImage from '../../assets/Bannerhome.png'
import logements from '../../logements.json'
import './home.scss'

function Home() {
   const [accommodations, setAccommodations] = useState([])

   useEffect(() => {
      setAccommodations(logements)
   }, [])

   return (
      <div className="home__style">
         <Banner
            backgroundImage={backgroundImage}
            text="Chez vous, partout et ailleurs"
            height="200px"
         />
         <div className="home__grid">
            {accommodations.map((accommodation) => (
               <Card
                  key={accommodation.id}
                  title={accommodation.title}
                  cover={accommodation.cover}
               />
            ))}
         </div>
      </div>
   )
}

export default Home

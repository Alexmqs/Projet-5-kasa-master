import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faChevronLeft,
   faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import './carrousel.scss'

//Gestion du carrousel et des images à l'intérieur
const Carousel = ({ pictures }) => {
   const [currentIndex, setCurrentIndex] = useState(0)

   const handlePrevClick = () => {
      const newIndex =
         currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
   }

   const handleNextClick = () => {
      const newIndex =
         currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
   }

   return (
      <div className="carousel">
         <button
            className="carousel__button carousel__button--left"
            onClick={handlePrevClick}
         >
            <FontAwesomeIcon icon={faChevronLeft} />
         </button>
         <img
            className="carousel__image"
            src={pictures[currentIndex]}
            alt={`Slide ${currentIndex}`}
         />
         <div className="carousel__index">{`${currentIndex + 1}/${
            pictures.length
         }`}</div>
         <button
            className="carousel__button carousel__button--right"
            onClick={handleNextClick}
         >
            <FontAwesomeIcon icon={faChevronRight} />
         </button>
      </div>
   )
}

export default Carousel

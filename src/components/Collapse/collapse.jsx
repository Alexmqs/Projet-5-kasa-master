import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './collapse.scss'

const Collapse = ({ title, content }) => {
   const [isOpen, setIsOpen] = useState(false)

   const toggleCollapse = () => {
      setIsOpen(!isOpen)
   }

   return (
      <div className="collapse">
         <div className="collapse__header" onClick={toggleCollapse}>
            <span>{title}</span>
            <span className={`collapse__icon ${isOpen ? 'open' : ''}`}>
               <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </span>
         </div>
         <div className={`collapse__content ${isOpen ? 'open' : 'closed'}`}>
            {content}
         </div>
      </div>
   )
}

export default Collapse

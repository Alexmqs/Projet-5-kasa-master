import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './collapse.scss'

const Collapse = ({ title, content, collapseClass, collapseheaderClass }) => {
   const [isOpen, setIsOpen] = useState(false)

   const toggleCollapse = () => {
      setIsOpen(!isOpen)
   }

   return (
      <div className={`collapse ${collapseClass}`}>
         <div
            className={`collapse__header ${collapseheaderClass}`}
            onClick={toggleCollapse}
         >
            <span className="collapse__title">{title}</span>
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

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './collapse.scss'

const Collapse = ({ title, content, width }) => {
   const [isOpen, setIsOpen] = useState(false)

   const toggleCollapse = () => {
      setIsOpen(!isOpen)
   }

   return (
      <div className="collapse" style={{ width: width }}>
         <div className="collapse-header" onClick={toggleCollapse}>
            <span>{title}</span>
            <span className={`collapse-icon ${isOpen ? 'open' : ''}`}>
               <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </span>
         </div>
         <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
            {content}
         </div>
      </div>
   )
}

export default Collapse

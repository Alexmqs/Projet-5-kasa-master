import './card.scss'

function Card({ onClick, title, cover }) {
   return (
      <div className="card" onClick={onClick}>
         <img src={cover} alt={title} className="card__cover" />
         <h2 className="card__title">{title}</h2>
      </div>
   )
}

export default Card

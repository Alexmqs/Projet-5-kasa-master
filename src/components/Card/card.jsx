import './card.scss'

//Gestion des cartes image/titre
function Card({
   onClick,
   title,
   cover,
   cardClass,
   cardcoverClass,
   cardtitleClass,
}) {
   return (
      <div className={`card ${cardClass}`} onClick={onClick}>
         <img
            src={cover}
            alt={title}
            className={`card__cover ${cardcoverClass}`}
         />
         <h2 className={`card__title ${cardtitleClass}`}>{title}</h2>
      </div>
   )
}

export default Card

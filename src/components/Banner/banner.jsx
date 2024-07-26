import './banner.scss'

//Gestion des bannières avec image/texte
function Banner({ backgroundImage, text, textClass, imgClass, bannerClass }) {
   const imgStyle = {
      backgroundImage: `url(${backgroundImage})`,
   }

   return (
      <div className={`banner ${bannerClass}`}>
         <div className={`banner__img ${imgClass}`} style={imgStyle}>
            <h2 className={`banner__text ${textClass}`}>{text}</h2>
         </div>
      </div>
   )
}

export default Banner

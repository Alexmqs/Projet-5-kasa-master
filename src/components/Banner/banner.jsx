import './banner.scss'

function Banner({ backgroundImage, text, textClass, bannerClass }) {
   const bannerStyle = {
      backgroundImage: `url(${backgroundImage})`,
   }

   return (
      <div className={`banner ${bannerClass}`} style={bannerStyle}>
         <div className="banner__overlay"></div>
         <h2 className={`banner__text ${textClass}`}>{text}</h2>
      </div>
   )
}

export default Banner

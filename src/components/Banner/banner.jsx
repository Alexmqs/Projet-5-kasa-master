import './banner.scss'

function Banner({ backgroundImage, text, height }) {
   const bannerStyle = {
      backgroundImage: `url(${backgroundImage})`,
      height: height,
   }

   return (
      <div className="banner" style={bannerStyle}>
         <div className="banner__overlay">
            <h1 className="banner__text">{text}</h1>
         </div>
      </div>
   )
}

export default Banner

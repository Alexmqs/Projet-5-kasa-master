import './banner.scss'

function Banner({ backgroundImage, text, height = '200px' }) {
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

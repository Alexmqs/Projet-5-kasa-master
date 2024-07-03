import Banner from '../../components/Banner/banner'
import backgroundImage from '../../assets/Bannerhome.png'

function Home() {
   return (
      <div>
         <Banner
            backgroundImage={backgroundImage}
            text="Chez vous, partout et ailleurs"
            height="200px"
         />
      </div>
   )
}
export default Home

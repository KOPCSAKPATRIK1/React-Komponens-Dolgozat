import Footer from "../Componens/Footer"
import Navbar from "../Componens/Navbar"


const Home = () => {
  return (

    <div>
    <Navbar />
      <div className="homeContainer">
        <p>Üdvözöllek DJ Petrik weboldalán!</p>

        <p>Válassz a fenti lehetőségek közül!</p>

        <img src={require('../Images/dj.jpg')} width="500" />
      </div>

      <Footer />
    </div>
  )
}

export default Home
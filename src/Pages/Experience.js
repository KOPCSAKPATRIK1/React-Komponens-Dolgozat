import Footer from "../Componens/Footer"
import Navbar from "../Componens/Navbar"


const Experience = () => {
  return (
    <div>
        <Navbar />
        <div className="experienceContainer">
            <p>Pro-bono bulik</p>
            <ul>
                <li>Csibeavató, 2021. 08. 31.</li>
               <li>Karácsonyi bál, 2021. 12. 22.</li>
                <li>Farsangi mulatság, 2022. 02. 20.</li>
            </ul>
            <p>Professzionális bulik</p>
            <ul>
                <li>Tanárkarácsony, 2021. 12. 20.</li>
                <li>Ballagás, 2022. 04. 30.</li>           
            </ul>
            <img src={require('../Images/petrik.jpg')} width="200"/>
        </div>
      <Footer />
    </div>
  )
}

export default Experience
import { useNavigate } from 'react-router-dom'
import '../component/gallery.css'
import Navbar from './navbar'
import Footer from './footer'
import WebGalleryBox from '../subcomponent/webGalleryBox'
export default function Gallery()



  {

    const navigate = useNavigate()
    const handleevent=()=>{
     navigate('/booking')
    }

    return (
        <>
        <Navbar/>
       <div class="main">
  <h1 className='past'>Tailored Experiences: Personalized Events Crafted by eventFlow</h1>
  {/* <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/Marriage.jpg"/></div>
        <div class="card_content">
          <h1 class="card_title">Wedding</h1>
          <p class="card_text">From the delicate exchange of vows to the exuberant celebrations that follow, our team at EventFlow has curated weddings that are as unique as the love stories they commemorate. </p>
         
          <button class="btn card_btn"  onClick={handleevent} >Choose preferences</button>
         

        

        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/light_theme.jpg"/></div>
        <div class="card_content">
        <h1 class="card_title">LIGHT THEME DECORATION</h1>
          <p class="card_text"> Our light-themed decorations are designed to enhance the beauty of your space, creating a mesmerizing ambiance that enchants guests from the moment they arrive and decorations to suit your theme.</p>
          <button class="btn card_btn" onClick={handleevent} >Choose preferences</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/slide4.jpg"/></div>
        <div class="card_content">
        <h1 class="card_title">Annoucement</h1>
          <p class="card_text">At eventFlow, we excel in crafting memorable announcement events that captivate audiences and leave a lasting impression. we're passionate about turning your announcements into unforgettable events.</p>
          <button class="btn card_btn" onClick={handleevent} >Choose preferences</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/bday.jpg"/></div>
        <div class="card_content">
          <h1 class="card_title">Birthday</h1>
          <p class="card_text">A birthday celebration wouldn't be complete without delicious food and drinks, and our culinary team, supported by the meticulous planning of the EventFlow system, did not disappoint. </p>
          <button class="btn card_btn" onClick={handleevent} >Choose preferences</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/cm.jpg"/></div>
        <div class="card_content">
          <h1 class="card_title">Ceremony</h1>
          <p class="card_text">Our team of EventFlow, flawlessly managed every aspect of the ceremony, <br></br> from coordinating logistics to ensuring that every guest felt welcomed and valued.  </p>
          <button class="btn card_btn" onClick={handleevent} >Choose preferences</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/Concert.jpg"/></div>
        <div class="card_content">
          <h1 class="card_title">Concert</h1>
          <p class="card_text">We specialize in crafting extraordinary experiences that resonate with audiences long after the final note fades. Recently, we had the privilege of organizing an electrifying concert for one of our esteemed clients. </p>
          <button class="btn card_btn" onClick={handleevent} >Choose preferences</button>
        </div>
      </div>
    </li>
  </ul> */}
  <WebGalleryBox />
</div>

<Footer/>

        </>
    )
}
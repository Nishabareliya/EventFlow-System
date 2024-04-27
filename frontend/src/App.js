import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './subcomponent/home';
import Login from './component/login';
import Register from './component/register';
import Booking from './component/booking';
import Feedback from './component/feedback';
import Gallery from './component/gallery';
import Payment from './component/payment';
import Cart from './subcomponent/Cart';
import Dashboard from './admin/Components/Dashboard/dashboard';
import LoginForm from './admin/Components/login';
import RegistrationForm from './admin/Components/Register/register';
import EventDetail from './admin/Components/Dashboard/eventDetail';
import EventUpdates from './admin/Components/Dashboard/eventUpdate';
import EventFeedback from './admin/Components/Dashboard/feedBacks';
import GalleryUpdate from './admin/Components/Dashboard/galleryUpdate';
import WebGallery from './admin/Components/Dashboard/web-gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Routes from the first app */}
          <Route element={<Home />} path="/home" />
          <Route element={<Login />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<Booking />} path="/booking" />
          <Route element={<Feedback />} path="/f" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<Gallery />} path="/gallery" />
          <Route element={<Payment />} path="/payment" />
          
          {/* Routes from the second app */}
          <Route path="/galleryUpdate" element={<GalleryUpdate />} />
          <Route path="/eventfeedback" element={<EventFeedback />} />
          <Route path="/eventupdate" element={<EventUpdates />} />
          <Route path="/eventdetails" element={<EventDetail />} />
          <Route path="/regis" element={<RegistrationForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/webGallery" element={<WebGallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import FeedbackIcon from '@mui/icons-material/Feedback';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CollectionsIcon from '@mui/icons-material/Collections';
import { useNavigate } from 'react-router-dom';
import WebIcon from '@mui/icons-material/Web';
// import '../Dashboard/sidebar.css'
export default function Sidebar(){

   const navigate = useNavigate();
   const handlegallery =()=>{
    navigate('/galleryUpdate')
   }

   const handleDisplayevent =()=>{
    navigate('/eventdetails')
   }

   const handleFeedback =()=>{
    navigate('/eventfeedback')
   }

   const handleEventUpdate=()=>{
       navigate('/eventupdate')
   }

   const handleWebgallery=()=>{
    navigate('/webGallery')
}
  return(
    <div className="body">
  <React.Fragment>
    <div className='background'>
    <ListItemButton onClick={handleDisplayevent}>
      <ListItemIcon>
        <EventSeatIcon />
      </ListItemIcon>
      <ListItemText  primary="Bookings" />
    </ListItemButton>

    <ListItemButton onClick={handleFeedback}>
      <ListItemIcon>
        <FeedbackIcon />
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItemButton>

    <ListItemButton onClick={handleEventUpdate}>
      <ListItemIcon>
        <BorderColorIcon />
      </ListItemIcon>
      <ListItemText primary="UpdateEvent" />
    </ListItemButton>

    <ListItemButton onClick={handlegallery}>
      <ListItemIcon> 
        <CollectionsIcon />
      </ListItemIcon>
      <ListItemText primary="Galley Update" />
    </ListItemButton>
      
    <ListItemButton onClick={handleWebgallery}>
      <ListItemIcon> 
        <WebIcon />
      </ListItemIcon>
      <ListItemText primary="Web Gallery" />
    </ListItemButton>

    </div>
  </React.Fragment>



   


  </div>
  )
};


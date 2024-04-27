import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import "./web.css"; // Import CSS file

const WebGalleryBox = () => {
    const [galleries, setGalleries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/getGallery')
            .then(response => {
                setGalleries(response.data);
            })
            .catch(error => {
                console.log('Error fetching galleries:', error);
            });
    }, []);

    const handleEvent = () => {
        navigate('/booking');
    };

    return (
        <div className="gallery-container">
            <ul className="cards">
                {galleries.map((gallery, index) => (
                    <li key={index} className="cards_item">
                        <div className="card">
                            <div className="card_image"><img src={require(`../../../back/uploads/${gallery.images}`)} alt={gallery.eventType} /></div>
                            <div className="card_content">
                                <h1 className="card_title">{gallery.eventTypes}</h1>
                                <p className="card_text">{gallery.description}</p>
                                <button className="btn card_btn" onClick={handleEvent}>Choose preferences</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WebGalleryBox;

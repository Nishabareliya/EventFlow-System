import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './blog.css'

export default function Blog(){
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

    const slicedGalleries = galleries.slice(0, 3);
    return(
        <>
            <div className="container pt">

                {slicedGalleries.map((gallery, index) => (
                    <div className="card" key={index}>
                       <img src={require(`../../../back/uploads/${gallery.images}`)} alt="First Image"/> 
                        <div className="card-body">
                            <h2 className="card-title">{gallery.eventTypes}</h2>
                            <p className="card-text">{gallery.description}</p>
                            <a href="gallery" className="btn">Explore</a>
                        </div>
                    </div>
                ))}

            </div> 
        </>
    )
}

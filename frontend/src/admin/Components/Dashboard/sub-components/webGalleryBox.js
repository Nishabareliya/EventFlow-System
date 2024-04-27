import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import Swal from 'sweetalert2';

const WebGalleryBox = () => {
    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/getGallery')
            .then(response => {
                setGalleries(response.data);
            })
            .catch(error => {
                console.log('Error fetching galleries:', error);
            });
    }, []);

    const handleDelete = (id) => {
        if (!id) {
            console.error("ID is undefined or null");
            return;
        }

        axios.delete(`http://localhost:5000/deleteGallery/${id}`)
            .then(response => {
                Swal.fire({
                    icon: "success",
                    title: "Success...",
                    text: "Gallery Deleted Successfully",
                });
                console.log(response.data);
                setGalleries(prevGalleries => prevGalleries.filter(gallery => gallery._id !== id));
            })
            .catch(err => console.error(err));
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {galleries.map((gallery, index) => (
                <Card key={index} sx={{ maxWidth: 345, marginBottom: '20px', marginRight: '20px', minWidth: '300px' }}>
                    <CardContent>
                        {gallery.images ? (
                            <CardMedia
                                component="img"
                                src={require(`../../../../../../back/uploads/${gallery.images}`)} // Assuming the images are served from this URL
                                alt={gallery.eventTypes}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        ) : (
                            <span>No Image Available</span>
                        )}
                        <Typography gutterBottom variant="h5" component="div" style={{ marginTop: '10px' }}>
                            {gallery.eventTypes}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {gallery.description}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                        <Button size="small" variant="outlined" color="primary">Share</Button>
                        <Button size="small" variant="outlined" color="secondary" onClick={() => handleDelete(gallery._id)} style={{ marginLeft: '10px' }}>Delete Gallery</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

export default WebGalleryBox;

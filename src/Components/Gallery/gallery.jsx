import React from 'react';
import Card from '../Card/card';
import './gallery.scss';

function Gallery() {
    return (
        <div className='gallery-container'>
            <Card title="Project 1"/>
            <Card title="Project 2"/>
            <Card title="Project 3"/>
        </div>
    )
}

export default Gallery;
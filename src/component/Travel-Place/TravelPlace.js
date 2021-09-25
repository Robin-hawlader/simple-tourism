import React, { useEffect, useState } from 'react';
import SinglePlace from '../Single-Place/SinglePlace';

const TravelPlace = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('./travel.JSON')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div className='row my-5'>
            <div className='col-9'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        places.map(place => <SinglePlace key={place.id} place={place}></SinglePlace>)
                    }
                </div>
            </div>
            <div className='col-3'>
                <h1>Visit Expenses Details</h1>
            </div>
        </div>
    );
};

export default TravelPlace;
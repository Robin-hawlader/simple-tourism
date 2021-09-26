import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SinglePlace from '../Single-Place/SinglePlace';
import './TravelPlace.css'

const TravelPlace = () => {
    const [places, setPlaces] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./travel.JSON')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    const handleBokking = (place) => {
        const newCart = [...cart, place];
        setCart(newCart)
    }
    // card group function---------
    return (
        <div className='row my-5'>
            <div className='col-9'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        places.map(place => <SinglePlace handleBokking={handleBokking} key={place.id} place={place}></SinglePlace>)
                    }
                </div>
            </div>
            <div className='col-3'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default TravelPlace;
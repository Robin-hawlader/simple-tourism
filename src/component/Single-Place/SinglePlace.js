import React from 'react';
import './SinglePlace.css';

const SinglePlace = (props) => {
    console.log(props)
    const { img, location, placeName, view, cost } = props.place;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className='img-resize' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Place: {placeName}</h5>
                        <p>Location: {location}</p>
                        <p>View: {view}</p>
                        <p>Cost: {cost}</p>
                    </div>
                    <button className="btn btn-dark text-light">Bokking Now</button>
                </div>
            </div>
        </div>
    );
};

export default SinglePlace;
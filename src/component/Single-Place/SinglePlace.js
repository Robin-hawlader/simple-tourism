import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import './SinglePlace.css';

const SinglePlace = (props) => {
    const { img, location, placeName, view, cost, transpot } = props.place;
    const element = <FontAwesomeIcon icon={faAngleDoubleRight} />


    // single card------------
    return (
        <div>
            <div className="col">
                <div className="card h-100 single-cart">
                    <img src={img} className='img-resize' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Place: {placeName}</h5>
                        <p>Location: {location}</p>
                        <p>Transportation: {transpot}</p>
                        <p>View: {view}</p>
                        <p>Cost: {cost}</p>
                    </div>
                    <button onClick={() => props.handleBokking(props.place)} className="btn btn-dark text-light">{element} Check Expense</button>
                </div>
            </div>
        </div>
    );
};

export default SinglePlace;
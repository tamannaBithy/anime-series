import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Anime.css'


const Anime = (props) => {

    const { image, name, age, salary, movie } = props.anime;
    const handleAddInfo = props.handleAddInfo;

    return (

        <div className="col">
            <div className="card card-height">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p>Age: {age}</p>
                    <p>Best Movie: {movie}</p>
                    <p>Making Cost: ${salary}</p>
                </div>
                <div className="mb-3">
                    <button onClick={() => handleAddInfo(props.anime)} type="button" className="btn select-btn">
                        <FontAwesomeIcon icon={faUserPlus} className="mx-2" />
                    Select This Character</button>
                </div>
            </div>
        </div>

    );
};

export default Anime;
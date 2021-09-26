import React, { useEffect, useState } from 'react';
import Anime from '../Anime/Anime';
import Info from '../Info/Info';
import './Body.css';

const Body = () => {

    const [animes, setAnimes] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('./animeData.JSON')
            .then(res => res.json())
            .then(data => setAnimes(data))
    }, [])


    const handleAddInfo = (animes) => {
        const newInfo = [...info, animes];
        setInfo(newInfo);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-9  mb-4">
                    <div className="row row-cols-3 row-cols-md-3 g-4">
                        {
                            animes.map(anime => <Anime key={anime.id} anime={anime} handleAddInfo={handleAddInfo} ></Anime>)
                        }
                    </div>
                </div>


                <div className="col-3 info-color position-sticky">
                    <h4 className="fw-bold">Total Anime : {animes.length}</h4>
                    <Info info={info}></Info>
                </div>
            </div>
        </div>
    );
};

export default Body;
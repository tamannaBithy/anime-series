import React, { useEffect, useState } from 'react';
import Anime from '../Anime/Anime';

const Body = () => {

    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch('./animeData.JSON')
            .then(res => res.json())
            .then(data => setAnimes(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    {
                        animes.map(anime => <Anime anime={anime} ></Anime>)
                    }
                </div>


                <div className="col-4">

                </div>
            </div>
        </div>
    );
};

export default Body;
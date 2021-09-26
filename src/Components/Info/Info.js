import React from 'react';

const Info = (props) => {

    const info = props.info;
    const totalCost = info.reduce((sum, anime) => sum + anime.salary, 0)

    return (
        <div>
            <h5>Selected Animes : {info.length}</h5>
            {
                info.map(anime =>
                    <div >
                        <ul className="d-flex justify-content-between">
                            <li>{anime.name}</li>
                            <div>{anime.salary}</div>
                        </ul>
                    </div>
                )
            }

            <h5>Total Cost : {totalCost}</h5>
        </div>
    );
};

export default Info;
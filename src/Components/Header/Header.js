import React from 'react';
import './Header.css';


const Header = () => {

    return (
        <div className="container m-5">
            <h1>The Studio Gibli's Best Creatures</h1>
            <p>Anime is a term for a style of Japanese comic book and video cartoon animation <br /> in which the main characters have large doe-like eyes.</p>
            <h4>Total Revenue : <span className="fw-bold">$200 Million</span></h4>
        </div>
    );
};

export default Header;
import React from "react";
import Score from "./score";


function Navbar() {
    return (
        <div className="navbar z-depth-5">
                <a href="/" className="nav nav-link" data-hover="Match&rarr;&amp;&larr;Mix" data-active="Active!"><span>Mix&larr;&amp;&rarr;Match</span></a>
                <p className="nav nav-item info">Click an image to begin</p>
                
        <Score />
        </div>
    )
};

export default Navbar;
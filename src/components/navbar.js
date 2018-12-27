import React from "react";

const Navbar = props => (

    <div className="navbar z-depth-5">
        <a href="/" className="nav nav-link" data-hover="Match&rarr;&amp;&larr;Mix" data-active="Active!"><span>Mix&larr;&amp;&rarr;Match</span></a>
        <p className="nav nav-item info">Click an image to begin</p>

        <div className="nav nav-item mr-4 scores">
            Score: {props.score} Top Score: {props.highScore}
        </div>
    </div>
)

export default Navbar;
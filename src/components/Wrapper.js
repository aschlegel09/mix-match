import React from 'react';
import "./Wrapper.css"

const Wrapper = props =>

    <div className="main">
        <h1 className="head top-head">Mix &amp; Match Game!</h1>
        <br />
        <h4 className="head mb-4">Click on an image to earn points,<br /> but don't click on any one more than once!</h4>
        <div className="wrapper">{props.children}</div>
        <div className="footer-copyright text-center py-3">© 2018 Copyright: <a href="https://github.com/aschlegel09/mix-match" className="text-white">aschlegel09 Github</a>
      </div>
    </div>

export default Wrapper;
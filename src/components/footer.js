import React from "react";

const Footer = () => {
    return (


        <footer className="content background">
            <a className="mx-2 mt-lg-0 mt-lg-2" href="#">
              <button className="btn green-button">Register</button>
            </a>
            <a className="mx-2 mt-lg-0 mt-lg-2" href="#">
              <button className="btn green-button">Registration Closed</button>
            </a>
            <hr />
            <div className="row logo-row">
                <a href="/"><img src="https://centerforinquiry.org/wp-content/uploads/2018/02/CFI2017-on-blue.png" className="footer-logo" /></a>
                <a href="/"><img src="https://centerforinquiry.org/wp-content/uploads/2018/06/CSICON-logo-standard-01-e1525711753321.png" className="footer-logo" /></a>
            </div>
        </footer>


    );
}

export default Footer;
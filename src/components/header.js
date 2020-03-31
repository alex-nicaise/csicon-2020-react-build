import React from "react";
import Helmet from "react-helmet";

const Header = () => {

    return (
        
        <>
            <Helmet>
                <link rel="stylesheet" href="https://csiconference.org/wp-content/themes/cfi-conference/style.css" type="text/css"></link>
                <script src="https://centerforinquiry.org/js/new/src/nav-icon.js" type="text/javascript"></script>
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
            </Helmet>
            
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                        <img id="logo" className="d-none d-md-block" src="https://centerforinquiry.org/wp-content/uploads/2018/06/CSICON-logo-standard-01-e1525711753321.png" alt="CSICon Logo"></img>
                        <img id="logo" className="d-md-none d-block" src="https://centerforinquiry.org/wp-content/uploads/2020/03/CSICON-logo-mobile-02-e1525711830469.png" alt="CSICon Logo"></img>
                </a>
                <div id="menu-text" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">MENU</div>

                <div id="nav-icon3" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item mx-auto mr-lg-2">
                            <a className="nav-link" href="" id="speakers-link">Speakers</a>
                        </li>
                        <li className="nav-item mx-auto x-lg-2">
                            <a className="nav-link" href="" id="schedule-link">Schedule</a>
                        </li>
                        <li className="nav-item mx-auto mx-lg-2">
                            <a className="nav-link" href="" id="updates-link">Updates</a>
                        </li>
                        <li className="nav-item mx-auto mx-lg-2">
                            <a className="nav-link" href="" id="info-link">Info</a>
                        </li>
                        <li className="nav-item mx-auto ml-lg-2">
                            <a className="btn white-button-outline" href="">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    );
}

export default Header;
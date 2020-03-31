import React from "react";

const LandingVid = () => {
    return (

        <div className="row landing">
            <video autoPlay={true} muted={true} loop={true} id="homeVid">
                <source src="https://csiconference.org/wp-content/uploads/sites/25/2019/04/CSICon-Promo-Vid-4-17-webm.webm" type="video/webm"></source>
                <source src="https://csiconference.org/wp-content/uploads/sites/25/2019/04/CSI-Con-Promo-4-16.mp4" type="video/mp4"></source>
            </video>
            <div className="row no-stretch">
                <div className="col-12 col-md-6"></div>
                <div className="col-12 col-md-6">
                    <div id="text-outer">
                        <h1>Skeptics, this is our moment!</h1>
                        <h2>CSICon 2020</h2>
                        <h3>Flamingo Hotel Las&nbsp;Vegas<br></br></h3>
                        <h3>October 17-20</h3>
                        <p>with optional preconference Workshops</p>
                        <a className="btn green-button mb-3" href="https://secure.centerforinquiry.net/csicon-2019-registration">Register Now</a> 
                        <hr></hr>
                        <div className="audio-container mt-4 mb-3">
                            <h3>Listen to the Audio Promo!</h3>
                            <audio style={{width: 100 + '%'}} controls="controls" preload="auto" className="audio">
                                <source src="https://csiconference.org/wp-content/uploads/sites/25/2019/05/Csicon2019-Promo.mp3" type="audio/mpeg"></source>
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LandingVid;
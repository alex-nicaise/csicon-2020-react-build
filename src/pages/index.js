import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";

import Layout from "../components/layout";
import LandingVid from "../components/homePage/landing-video";
import FeaturedContainer from "../components/homePage/featuredContainer";
import HomeTitle from "../components/homePage/homeTitle";
import HomeFullWButton from "../components/homePage/homeFullWButton";
import HomeHeroContainer from "../components/homePage/homeHeroContainer";
import ScheduleContainer from "../components/homePage/schedule/scheduleContainer";
import InfoSection from "../components/homePage/infoSection";

class HomePage extends React.Component {

    componentDidMount(){
        document.addEventListener("scroll", function(){
            
            const e = document.querySelector(".navbar");
            window.pageYOffset > 0 && document.querySelector("div.page-template-home-page") ? e.classList.add("graynav") : e.classList = "navbar navbar-expand-lg";
        
        }, false);
    }

    render (){
        return (

            <div className="page-template-home-page">
                <Layout>
                    <LandingVid />
                    <HomeTitle title="Speakers" />
                    <div className="container module-container">
                        <FeaturedContainer />
                        <HomeFullWButton link="/" text="See the Full Lineup" />
                    </div>
                    <HomeHeroContainer />
                    <HomeTitle title="Schedule" />
                    <ScheduleContainer />
                    <HomeTitle title="Updates" />
                    <HomeTitle title="Info" />
                    <InfoSection />
                </Layout>
            </div>

        ); 
    }

}

export default HomePage;
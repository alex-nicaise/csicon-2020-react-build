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
import $ from 'jquery'; 

class HomePage extends React.Component {

    componentDidMount(){
        document.addEventListener("scroll", function(){
            const e = document.querySelector(".navbar");
            window.pageYOffset > 0 && document.querySelector("div.page-template-home-page") ? e.classList.add("graynav") : e.classList = "navbar navbar-expand-lg";    
        }, false);

        $("#speakers-link").click(function() {
            $("html, body").animate({
                scrollTop: $("#speakers-header").offset().top - $(".navbar.navbar-expand-lg").outerHeight()
            }, 500)
        });

        $("#schedule-link").click(function() {
            $("html, body").animate({
                scrollTop: $("#schedule-header").offset().top - $(".navbar.navbar-expand-lg").outerHeight()
            }, 500)
        });

        $("#updates-link").click(function() {
            $("html, body").animate({
                scrollTop: $("#updates-header").offset().top - $(".navbar.navbar-expand-lg").outerHeight()
            }, 500)
        });

        $("#info-link").click(function() {
            $("html, body").animate({
                scrollTop: $("#info-header").offset().top - $(".navbar.navbar-expand-lg").outerHeight()
            }, 500)
        });
        
    }

    render (){
        return (

            <div className="page-template-home-page">
                <Layout>
                    <LandingVid />
                    <HomeTitle title="Speakers" id="speakers-header" />
                    <div className="container module-container">
                        <FeaturedContainer />
                        <HomeFullWButton linkTo="/all-speakers" text="See the Full Lineup" />
                    </div>
                    <HomeHeroContainer />
                    <HomeTitle title="Schedule" id="schedule-header" />
                    <ScheduleContainer />
                    <HomeTitle title="Updates" id="updates-header" />
                    <HomeTitle title="Info" id="info-header" />
                    <InfoSection />
                </Layout>
            </div>

        ); 
    }

}

export default HomePage;
import React from "react";
import useRegisterHero from "../../hooks/useRegisterHero";
import HomeHero from "./homeHero";

const HomeHeroContainer = () => {
    return(
        <HomeHero link={useRegisterHero().featuredImage.sourceUrl} content={useRegisterHero().content} />
    );
}

export default HomeHeroContainer;
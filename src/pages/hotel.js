import React from "react";
import LayoutAlt from "../components/layout-alt";
import useHotelPage from "../hooks/useHotelPage";
import PageInfo from "../components/pageInfo";
import PageHeader from "../components/pageHeader";

const Hotel = () => {

    return (

        <div className="page-template-hotel-page">
            <LayoutAlt>

                <div className="row page-row no-stretch">
                    <div className="col-12 col-lg-8">
                
                        <PageHeader text="Hotel" />

                        <PageInfo content={useHotelPage().node.content} />

                    </div>
                </div>

            </LayoutAlt>
        </div>

    )
}

export default Hotel;
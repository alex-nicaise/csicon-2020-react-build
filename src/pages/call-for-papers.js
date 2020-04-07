import React from "react";
import LayoutAlt from "../components/layout-alt";
import usePapersPage from "../hooks/usePapersPage";
import PageInfo from "../components/pageInfo";
import PageHeader from "../components/pageHeader";

const Papers = () => {

    return (

        <div className="page-template-papers-page">
            <LayoutAlt>

                <div className="row page-row no-stretch">
                    <div className="col-12 col-lg-8">
                
                        <PageHeader text="Call for Papers" />

                        <PageInfo content={usePapersPage().node.content} />

                    </div>
                </div>

            </LayoutAlt>
        </div>

    )
}

export default Papers;
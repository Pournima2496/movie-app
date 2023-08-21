import React from "react";

import "./notfound.scss";

import ContentWrapper from "../../components/content/ContentWrapper";

const NotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    );
};

export default NotFound;
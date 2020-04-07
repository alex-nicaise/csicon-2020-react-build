import React from "react";
import PropTypes from "prop-types";

import HeaderAlt from "./header-alt";
import Footer from "./footer";
import "../css/styles.css";

const LayoutAlt = ({ children }) => {
  return (
    <>
      <HeaderAlt />
          <main className="container-fluid">
              {children}
          </main>
      <Footer />
    </>
  );
}

LayoutAlt.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutAlt;
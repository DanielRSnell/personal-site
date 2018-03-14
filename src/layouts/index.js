import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./sass/main.scss";
import "font-awesome/css/font-awesome.min.css";
const TemplateWrapper = ({ children }) => (
  <div className="core">
    <Helmet title="Daniel Snell - Full Stack Develop and Growth Expert" />
    <div>{children()}</div>
    <footer className="footer">
      <p className="footer__content">
        Daniel Snell 2018 &copy; This site was built by Unicorns.
      </p>
    </footer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

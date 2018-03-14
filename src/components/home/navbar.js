import React, { Component } from "react";
import Link from "gatsby-link";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to={"/about"} className="navbar__item">
          <span className="navbar__text"> About </span>
        </Link>
        <Link to={"/resume"} className="navbar__item">
          <span className="navbar__text"> Resume </span>
        </Link>
        <Link to={"/blog"} className="navbar__item">
          <span className="navbar__text"> Blog </span>
        </Link>
        <Link to={"/projects"} className="navbar__item">
          <span className="navbar__text"> Projects </span>
        </Link>
      </div>
    );
  }
}

export default Navbar;

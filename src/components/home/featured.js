import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import Link from "gatsby-link";
class Featured extends Component {
  render() {
    const data = this.props.data;

    return (
      <section className="featured">
        <div className="featured__image">
          <div className="featured__image">
            <h1 className="featured__heading--primary">{data.title}</h1>
            <h2 className="featured__heading--secondary">{data.subtitle}</h2>
            <div className="featured__social">
              <a href={data.github} className="featured__social--item">
                <FontAwesome
                  name="github-square"
                  className="featured__social--item--github"
                />
              </a>
              <a href={data.twitter} className="featured__social--item">
                <FontAwesome
                  name="twitter-square"
                  className="featured__social--item--twitter"
                />
              </a>
              <a href={data.linkedin} className="featured__social--item">
                <FontAwesome
                  name="linkedin-square"
                  className="featured__social--item--linkedin"
                />
              </a>
              <a href={data.medium} className="featured__social--item">
                <FontAwesome
                  name="medium"
                  className="featured__social--item--medium"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="featured__nav">
          <div className="navbar-end">
            <Link to={"/about"} className="navbar-item">
              <span className="navbar-item--white"> About </span>
            </Link>
            <Link to={"/resume"} className="navbar-item">
              <span className="navbar-item--white"> Resume </span>
            </Link>
            <Link to={"/blog"} className="navbar-item">
              <span className="navbar-item--white"> Blog </span>
            </Link>
            <Link to={"/projects"} className="navbar-item">
              <span className="navbar-item--white"> Projects </span>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Featured;

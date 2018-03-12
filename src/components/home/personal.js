import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import Link from "gatsby-link";

class Personal extends Component {
  render() {
    const data = this.props.data;

    return (
      <section className="personal u-margin-top-large">
        <div className="columns">
          <div className="column">
            <div className="personal__photo">
              <img
                src={data.featuredImage}
                className="personal__image u-margin-top-micro"
              />
            </div>
          </div>
          <div className="column">
            <div className="personal__about">
              <div className="personal__heading">About Me</div>
              <div className="personal__secondary u-margin-top-micro">
                {data.biline}
              </div>
              <p
                className="personal__content u-margin-top-micro"
                style={{ paddingRight: 20 }}
              >
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Personal;

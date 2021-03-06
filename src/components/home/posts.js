import React, { Component } from "react";
import Card from "./post-card";

class MediumPosts extends Component {
  render() {
    const featured = this.props.featured;
    const preview = this.props.data.edges;
    console.log(preview);
    return (
      <section className="posts u-margin-top-medium u-margin-bottom-micro">
        <div className="posts__heading">
          <div className="posts__recent">
            <Card posts={preview} image={featured} />
          </div>
        </div>
      </section>
    );
  }
}

export default MediumPosts;

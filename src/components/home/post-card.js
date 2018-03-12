import React, { Component } from "react";

class Card extends Component {
  render() {
    const data = this.props.posts.edges;
    const image = this.props.image;
    console.log(this.props);
    return (
      <div className="post__section">
        <div className="post__heading u-margin-bottom-micro">
          <span className="post__title">Recent Medium Posts</span>
        </div>
        <div className="columns">
          {data.map(item => (
            <div className="column" key={item.node.id}>
              <div className="column__item">
                <a
                  href={`https://blog.markgrowth.com/${item.node.slug}-${
                    item.node.id
                  }`}
                >
                  <div className="card" style={{ height: "100%" }}>
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          src={`https://cdn-images-1.medium.com/${
                            item.node.virtuals.previewImage.imageId
                          }`}
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src={image} alt="Placeholder image" />
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-6">
                            {item.node.title.substring(0, 20)}...
                          </p>
                          <p className="subtitle is-6">@SavvyHustler</p>
                        </div>
                      </div>

                      <div
                        className="content"
                        style={{ display: "inline-block" }}
                      >
                        {item.node.content.subtitle.substring(0, 40)}...
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;

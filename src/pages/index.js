import React, { Component } from "react";
import Link from "gatsby-link";
import Personal from "../components/home/personal";
import Featured from "../components/home/featured";
import MediumPosts from "../components/home/posts";

class IndexPage extends Component {
  render() {
    const data = this.props;
    const info = this.props.data.markdownRemark.frontmatter;
    const preview = this.props.data.allMediumPost;
    console.log(preview);
    const featured = this.props.data.markdownRemark.frontmatter.featuredImage;
    return (
      <div className="core">
        <Featured data={info} />
        <Personal data={info} />
        <MediumPosts data={preview} featured={featured} />
      </div>
    );
  }
}

export default IndexPage;

export const homePageQuery = graphql`
  query Home {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      html
      frontmatter {
        title
        subtitle
        featuredImage
        description
        biline
        github
        twitter
        linkedin
      }
    }
    allMediumPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
          content {
            subtitle
            metaDescription
          }
          virtuals {
            previewImage {
              imageId
              filter
              backgroundSize
              originalWidth
              originalHeight
              strategy
              height
              width
            }
          }
        }
      }
    }
  }
`;

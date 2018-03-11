import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Link from "gatsby-link";
import FontAwesome from "react-fontawesome";

export const HomePageTemplate = ({
  title,
  content,
  contentComponent,
  subtitle,
  featured
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="core">
      <section className="featured">
        <div className="featured__image">
          <div className="featured__image">
            <h1 className="featured__heading--primary">{title}</h1>
            <h2 className="featured__heading--secondary">{subtitle}</h2>
            <div className="featured__social">
              <span className="featured__social--item">
                <FontAwesome
                  name="github-square"
                  className="featured__social--item--github"
                />
              </span>
              <span className="featured__social--item">
                <FontAwesome
                  name="twitter-square"
                  className="featured__social--item--twitter"
                />
              </span>
              <span className="featured__social--item">
                <FontAwesome
                  name="linkedin-square"
                  className="featured__social--item--linkedin"
                />
              </span>
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
      <section className="personal u-margin-top-large">
        <div className="columns">
          <div className="column">
            <div className="personal__photo">
              <center>
                {" "}
                <img src={featured} className="personal__image" />
              </center>
            </div>
          </div>
          <div className="column">
            <div className="personal__about">
              <div className="personal__heading">About Me</div>
              <div className="personal__secondary u-margin-top-micro">
                Once developer, then data scienst, now Developer.
              </div>
              <p className="personal__content u-margin-top-micro">
                I started in technology 7 years ago.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(data);
  return (
    <HomePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      content={post.html}
      featured={post.frontmatter.featuredImage}
    />
  );
};

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        featuredImage
        description
      }
    }
  }
`;

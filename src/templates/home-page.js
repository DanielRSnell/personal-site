import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Personal from "../components/home/personal";
import Featured from "../components/home/featured";
import MediumPosts from "../components/home/posts";

export const HomePageTemplate = ({
  title,
  content,
  contentComponent,
  subtitle,
  featured,
  preview,
  info
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="core">
      <Featured data={info} />
      <Personal data={info} />
      <MediumPosts preview={preview} featured={featured} />
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const fields = post.frontmatter;
  const preview = data.allMediumPost.edges;
  return (
    <HomePageTemplate
      contentComponent={HTMLContent}
      title={fields.title}
      subtitle={fields.subtitle}
      content={post.html}
      featured={fields.featuredImage}
      github={fields.github}
      twitter={fields.twitter}
      linkedin={fields.linkedin}
      description={fields.description}
      biline={fields.biline}
      preview={preview}
      info={fields}
      data={data}
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

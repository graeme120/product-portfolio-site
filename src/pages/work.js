import React from "react";
import Layout from "../components/Layout.js";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/global.css";
import "../styles/work.css";
import "../styles/navbar.css";

export function Head() {
  return <title>Work | Graeme Mounsey</title>;
}

export default function Work({ data }) {
  const projectThumb = data.allDatoCmsProjectThumbnail.edges;

  // console.log(data.allDatoCmsProjectThumbnail.edges);
  // console.log(project);

  return (
    <Layout>
      <div className="index">
        <ul className="thumbs">
          {/* going through each projects and returning a template */}
          {projectThumb.map((project) => (
            <Link
              className="link"
              to={"/work/" + project.node.slug}
              key={project.node.thumbnailfeature}
            >
              {/*styling of thumbnail template */}
              <li className="project-wrap">
                {project.node.thumbnailfeature.map((block) => (
                  <div className="thumbWrapper">
                    {block.__typename === "DatoCmsVideoThumbnail" && (
                      <video
                        className="image-wrapper"
                        src={block.video.url}
                        playsInline
                        muted
                        autoPlay
                        loop
                      />
                    )}
                    {block.__typename === "DatoCmsImageThumbnail" && (
                      <GatsbyImage
                        className="imageAdjust"
                        image={block.image.gatsbyImageData}
                        alt={project.node.title}
                      />
                    )}
                  </div>
                ))}

                <div className="details">
                  <span className="title">{project.node.title}</span>
                  <span className="caption">
                    {project.node.medium}, {project.node.year}
                  </span>
                </div>
              </li>
            </Link>
          ))}
          <li>
            <Link className="link" to={"/work/experiments-with-code"}>
              <video
                className="image-wrapper"
                src="https://www.datocms-assets.com/95149/1677952596-coding-projects_logo-index.mp4"
                playsInline
                autoPlay
                muted
                loop
              />
              <div className="details">
                <span className="title">Design + Code Experiments</span>
                <span className="caption">2021-</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allDatoCmsProjectThumbnail(sort: { order: ASC }) {
      edges {
        node {
          thumbnailfeature {
            ... on DatoCmsVideoThumbnail {
              video {
                url
              }
            }
            ... on DatoCmsImageThumbnail {
              image {
                gatsbyImageData
              }
            }
            __typename
          }
          slug
          medium
          id
          title
          year
        }
      }
    }
    allDatoCmsProjectDetail {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

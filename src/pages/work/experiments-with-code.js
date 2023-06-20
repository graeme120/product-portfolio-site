import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout.js";
// import "../../styles/project-details.css";
import "../../styles/experiments-with-code.css";
import "../../styles/navbar.css";

export function Head() {
  return <title>Coding Projects | Graeme Mounsey</title>;
}

export default function Experiments({ data }) {
  console.log(data);
  const projectSlice = data.allDatoCmsCodingPage.edges;

  return (
    <Layout>
      <div className="coding-index">
        <ul className="coding-thumbs">
          {projectSlice.map((project) => (
            <li>
              <div className="project-wrapper">
                <div className="coding-title">
                  {project.node.title}, {project.node.year}
                  <div>{project.node.language}</div>
                  <br />
                  <div className="coding-desc">{project.node.description}</div>
                </div>
                <div className="coding-thumbnail">
                  <Link className="link" to={project.node.link}>
                    {project.node.thumbnail.map((block) => (
                      <div>
                        {block.id.startsWith("DatoCmsVideoThumbnail") && (
                          <video
                            className="image-wrapper"
                            src={block.video.url}
                            playsInline
                            muted
                            autoPlay
                            loop
                          />
                        )}
                        {block.id.startsWith("DatoCmsImageThumbnail") && (
                          <GatsbyImage
                            className="coding-image"
                            image={block.image.gatsbyImageData}
                          />
                        )}
                      </div>
                    ))}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query codingProject {
    allDatoCmsCodingPage(sort: { year: DESC }) {
      edges {
        node {
          title
          year
          link
          language
          description
          thumbnail {
            ... on DatoCmsVideoThumbnail {
              id
              video {
                url
              }
            }
            ... on DatoCmsImageThumbnail {
              id
              image {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

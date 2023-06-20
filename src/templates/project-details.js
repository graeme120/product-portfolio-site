import React, { useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/Layout.js";
import "../styles/project-details.css";

export function Head({ pageContext }) {
  return <title>{pageContext.pageContext.node.title} | Graeme Mounsey</title>;
}

export default function Product({ pageContext }) {
  const project = pageContext.pageContext.node;

  return (
    <Layout>
      <div className="project-page">
        <div className={project.projectclass}>
          <div className="project-header photo-wrapper">
            {project.featuredImage.map((block) => (
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
                    image={block.image.gatsbyImageData}
                    alt={project.title}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="project-body">
            <div className="project-desc">
              <div className="project-desc__title">
                {project.title}, {project.year}
                <br />
                <div>{project.medium}</div>
              </div>
              <div className="project-desc__desc">{project.description}</div>
            </div>
            <div className="project-content">
              {project.projectBody.map((block) => (
                <div>
                  <div className={block.id.startsWith("DatoCmsVideo") ? block.classname : null}>
                    {block.id.startsWith("DatoCmsVideo") && (
                      <video
                        className="image-wrapper"
                        src={block.video.url}
                        playsInline
                        muted
                        autoPlay
                        loop
                      />
                    )}
                  </div>
                  <div className={block.className}>
                    {block.id.startsWith("DatoCmsImage") && (
                      <GatsbyImage
                        className={block.classname}
                        image={block.image.gatsbyImageData}
                      />)}
                  </div>
                  <div className={block.id.startsWith("DatoCmsText") ? block.classname : null}>
                    {block.id.startsWith("DatoCmsText") && (
                      <div dangerouslySetInnerHTML={{ __html: block.text}}/>
                    )}
                  </div>
                  <div>
                    {block.id.startsWith("DatoCmsTextBlock") && (
                      <div className="text-block-wrapper">
                      <div className={block.id.startsWith("DatoCmsTextBlock") ? block.classname : null}>
                        <div className="text-block-title"dangerouslySetInnerHTML={{ __html: block.textBlockTitle}}/>
                        <div dangerouslySetInnerHTML={{ __html: block.textBlockBody}}/>
                      </div>
                      <div className={block.id.startsWith("DatoCmsTextBlock") ? block.classname2 : null}>
                        <div className="text-block-title" dangerouslySetInnerHTML={{ __html: block.textBlockTitle2}}/>
                        <div dangerouslySetInnerHTML={{ __html: block.textBlockBody2}}/>
                      </div>
                      <div className={block.id.startsWith("DatoCmsTextBlock") ? block.classname3 : null}>
                        <div className="text-block-title" dangerouslySetInnerHTML={{ __html: block.textBlockTitle3}}/>
                        <div dangerouslySetInnerHTML={{ __html: block.textBlockBody3}}/>
                      </div>
                      </div>
                    )}
                  </div>
                  <div>
                    {block.id.startsWith("DatoCmsDualImage") && (
                      <div className="dual-image-wrapper">
                      <GatsbyImage
                        className={block.classname1}
                        image={block.image1.gatsbyImageData}
                      />
                      <GatsbyImage
                        className={block.classname2}
                        image={block.image2.gatsbyImageData}
                      />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Link className="link bottomLink"
              to="/work">Back to Work</Link>
          </div>
        </div>  
      </div>
    </Layout>
  );
}

//  {pageContext.product.node.featuredImage.map((block) => (

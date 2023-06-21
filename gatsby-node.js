// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   const { data } = await graphql(`
//   query MyQuery {
//     allDatoCmsProjectThumbnail {
//       edges {
//         node {
//           slug
//         }
//       }
//     }
//     allDatoCmsProjectDetail {
//       edges {
//         node {
//           featuredImage {
//             ... on DatoCmsVideoThumbnail {
//               id
//               autoplay
//               muted
//               loop
//               video {
//                 url(imgixParams: {ar: "16:9", fit: "crop"})
//                 mimeType
//               }
//             }
//             ... on DatoCmsImageThumbnail {
//               id
//               image {
//                 gatsbyImageData(imgixParams: {ar: "16:9", fit: "crop"})
//                 mimeType
//               }
//             }
//           }
//           projectBody {
//             ... on DatoCmsVideo {
//               id
//               autoplay
//               loop
//               muted
//               video {
//                 url
//                 mimeType
//               }
//             }
//             ... on DatoCmsText {
//               id
//               text
//               classname
//             }
//             ... on DatoCmsImage {
//               id
//               classname
//               image {
//                 gatsbyImageData
//                 mimeType
//               }
//             }
//             ... on DatoCmsTextBlock {
//               id
//               textBlockBody
//               textBlockTitle
//               classname
//               classname2
//               classname3
//               textBlockTitle2
//               textBlockTitle3
//               textBlockBody3
//               textBlockBody2
//             }
//             ... on DatoCmsDualImage {
//               id
//               classname1
//               classname2
//               image1 {
//                 gatsbyImageData
//               }
//               image2 {
//                 gatsbyImageData
//               }
//             }
//           }
//           slug
//           title
//           medium
//           description
//           year
//           projectclass
//         }
//       }
//     }
//   }
//    `);

//   const productTemplate = path.resolve(`./src/templates/project-details.js`);
//   const details = data.allDatoCmsProjectDetail.edges;
//   console.log(data);
//   details.forEach((project) => {
//     actions.createPage({
//       path: `/work/${project.node.slug}`,
//       component: productTemplate,
//       context: {
//         // This time the entire product is passed down as context
//         pageContext: project
//       },
//     });
//   });
// };

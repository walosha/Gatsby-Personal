const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    // console.log(node, undefined, 4)
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // console.log(slug)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogTemplate = path.resolve("./src/templates/blog.js")

//   const response = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   response.data.allMarkdownRemark.edges.map(edges => {
//     createPage({
//       component: blogTemplate,
//       path: `/blog/${edges.node.fields.slug}`,
//       context: {
//         slug: edges.node.fields.slug,
//       },
//     })
//   })
// }

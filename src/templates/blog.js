import React from "react"
import { graphql } from "gatsby"

// export const query = graphql`
//   query($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       slug
//       publishedDate(fromNow: true)
//     }
//   }
// `

export default function Blog({ data }) {
  console.log(data)
  return (
    <div>
      {/* <h1> {data.markdownRemark.frontmatter.title}</h1>
      <p> {data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div> */}
    </div>
  )
}

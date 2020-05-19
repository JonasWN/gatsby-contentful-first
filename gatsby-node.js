const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostPage = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPostPage,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
    const productPage = path.resolve('./src/templates/product.js')
    resolve(
      graphql(
        `
          {
            allContentfulProduct {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const products = result.data.allContentfulProduct.edges
        products.forEach((product, index) => {
          createPage({
            path: `/products/${product.node.slug}/`,
            component: productPage,
            context: {
              slug: product.node.slug,
            },
          })
        })
      })
    )
  })
}

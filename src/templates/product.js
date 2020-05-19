import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import productStyles from './product.module.css'

const product = (props) => {
  const { price, title, image, catagory, stock } = props.data.contentfulProduct

  return (
    <Layout location={props.location}>
      <main>
        <article style={{ textAlign: 'center' }}>
          <h1>{title}</h1>
          <div className={productStyles.product_img}>
            <Img fluid={image.fluid} alt="product-img" />
          </div>
          <p>{price}</p>
          <p>{catagory}</p>
          <p>{stock}</p>
        </article>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProductBySlugQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProduct(slug: { eq: $slug }) {
      sku
      price
      slug
      stock
      catagory
      title
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default product

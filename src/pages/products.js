import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ProductPreview from '../components/product-preview'

class Products extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const productsJson = get(this, 'props.data.allContentfulProduct.edges')
    const products = productsJson.filter(
      (product) => product.node.image != null
    )

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Products</div>
          <div className="wrapper">
            <h2 className="section-headline">Products</h2>
            <ul className="article-list">
              {products.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ProductPreview {...node} />
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="wrapper"></div>
        </div>
      </Layout>
    )
  }
}

export default Products

export const pageQuery = graphql`
  query ProductsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProduct {
      edges {
        node {
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
    }
  }
`

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ slug, title, image, price }) => (
  <>
    <h3
      style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        WebkitLineClamp: '1',
        fontSize: '1em',
        textAlign: 'center',
        marginBottom: '20px',
      }}
    >
      <Link to={`/products/${slug}`}>{title}</Link>
    </h3>
    <Link to={`/products/${slug}`}>
      <Img fluid={image.fluid} alt="product-img" />
    </Link>
    <p style={{ textAlign: 'center' }}>{`${price} €`}</p>
    <Link to={`/products/${slug}`}>
      <button
        style={{
          width: '80%',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          color: '#333',
          border: '1px solid #b6b6b6',
          background: 'none',
          fontSize: '0.85em',
        }}
      >
        View
      </button>
    </Link>
  </>
)

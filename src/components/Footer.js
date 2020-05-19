import React from 'react'

const Footer = () => {
  const links = ['Facebook', 'Twitter', 'Github']
  return (
    <footer>
      <h2 style={{ textAlign: 'center' }}>Footer</h2>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0',
          padding: '10%',
        }}
      >
        {links.map((item, index) => {
          return (
            <li style={{ listStyle: 'none' }} key={index}>
              {item}
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer

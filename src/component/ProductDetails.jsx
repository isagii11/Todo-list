// import React from 'react'

// eslint-disable-next-line react/prop-types
const ProductDetails = ({deepName,deepPrice,deepDescription}) => {
  return (
    <section>
        <h3>{deepName}</h3>
        <h3>{deepPrice}</h3>
        <h3>{deepDescription}</h3>
        
    </section>
  )
}

export default ProductDetails
/* eslint-disable react/prop-types */
import 'react'
import ProductDetails from './ProductDetails';

// eslint-disable-next-line react/prop-types
const ProductItem = ( {product} ) => {
    
    
  return (
    <div>
        <h1>
            Display product items
        </h1>
        <ProductDetails
        deepName={product.name}
        deepPrice={product.price}
        deepDescription={product.description}
        />


        </div>
  )
}

export default ProductItem
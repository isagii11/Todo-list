/* eslint-disable react/prop-types */
import 'react'
import ProductDetails from './ProductDetails';

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
import React from 'react'
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'

import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart'
import { products } from '../data/products'

export const ShoppingPage = () => {
  const {shoppingCart, onProductCountChange} = useShoppingCart()

  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
          {products.map(product => (
            <ProductCard  
              key={product.id}
              value={0 || shoppingCart[product.id]?.count}
              onChange={ onProductCountChange }
              product={product} 
              className='text-white bg-dark'>
              <ProductImage className='custom-image' />
              <ProductTitle className='text-bold'/>
              <ProductButtons className='custom-buttons'/>
            </ProductCard>
          ))}
        </div>
        <div className='shopping-cart'>
          {Object.entries(shoppingCart).map( ([key, productCart]) => (
            <ProductCard 
              key={key} 
              value={productCart.count}
              onChange={ onProductCountChange }
              product={productCart} 
              style={{width: '100px'}} 
              className='text-white bg-dark'>
              <ProductImage className='custom-image' />
              <ProductButtons style={{display: 'flex',justifyContent: 'center'}} className='custom-buttons'/>
            </ProductCard>
          ) )}
        </div>
        {/* <div>
          <code>
            {JSON.stringify(shoppingCart, null, 5)}
          </code>
        </div> */}
    </div>
  )
}

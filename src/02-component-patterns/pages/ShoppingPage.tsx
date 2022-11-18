import React from 'react'
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'

import '../styles/custom-styles.css'
import { products } from '../data/products'

const product = products[0]

export const ShoppingPage = () => {

  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <ProductCard
          initialValues={{count:4, maxCount:10}}
          key={product.id}
          product={product} 
          className='text-white bg-dark'>
          {
            (args) => (
              <>
              <ProductTitle className='text-bold'/>
              <ProductImage className='custom-image' />
              <ProductTitle className='text-bold'/>
              <ProductButtons className='custom-buttons'/>
              <button onClick={args.reset}>Reset</button>
              <button onClick={() => args.increaseBy(-2)}>-2</button>
              <button disabled={args.isMaxCountReachd} onClick={() => args.increaseBy(2)}>+2</button>
              <span >{args.count}</span>
              {/* { JSON.stringify(args, null, 3)} */}
              </>
            )
          }
        </ProductCard>
    </div>
  )
}

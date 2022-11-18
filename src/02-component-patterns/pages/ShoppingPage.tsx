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
          product={product} >
          {
            (args) => (
              <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
              </>
            )
          }
        </ProductCard>
    </div>
  )
}

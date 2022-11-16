import React from 'react'
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
import coffeMug from '../assets/coffee-mug.png'

const product = {
  id: '1',
  title: 'Coffe Mug'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <ProductCard product={product}>
              <ProductImage img={coffeMug}/>
              <ProductTitle />
              <ProductButtons />
            </ProductCard>

            <ProductCard product={product}>
              <ProductCard.Image />
              <ProductCard.Title title='Coffe Mug 2'/>
              <ProductCard.Buttons />
            </ProductCard>
        </div>
    </div>
  )
}

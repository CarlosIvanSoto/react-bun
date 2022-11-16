import React from 'react'
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
import coffeMug from '../assets/coffee-mug.png'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffe Mug',
  img: coffeMug 
}

export const ShoppingPage = () => {
  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <ProductCard product={product} className='text-white bg-dark'>
              <ProductImage className='custom-image' />
              <ProductTitle className='text-bold'/>
              <ProductButtons className='custom-buttons'/>
            </ProductCard>

            <ProductCard product={product} className='text-white bg-dark'>
              <ProductCard.Image className='custom-image'/>
              <ProductCard.Title title='Coffe Mug 2' className='text-bold'/>
              <ProductCard.Buttons className='custom-buttons'/>
            </ProductCard>

            <ProductCard product={product} style={{backgroundColor: '#70D1F8'}}>
              <ProductImage style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
              <ProductTitle style={{display: 'flex', justifyContent:'center', fontWeight:'bold', fontSize:'25px'}}/>
              <ProductButtons style={{display: 'flex', justifyContent:'center'}}/>
            </ProductCard>
        </div>
    </div>
  )
}

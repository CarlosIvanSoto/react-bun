import React, { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

export const ProductCard = ({product, children}: ProductCardProps) => {

  const { counter, increseBy } = useProduct()
  const { Provider } = ProductContext

  return (
    <Provider value={{counter, increseBy, product}}>
      <div className={styles.productCard}>
        { children }
      </div>
    </Provider>

  )
}
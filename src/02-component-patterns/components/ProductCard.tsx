import React, { createContext, CSSProperties, ReactElement } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: CSSProperties
}

export const ProductCard = ({product, children, className, style}: Props) => {

  const { counter, increseBy } = useProduct()
  const { Provider } = ProductContext

  return (
    <Provider value={{counter, increseBy, product}}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        { children }
      </div>
    </Provider>

  )
}
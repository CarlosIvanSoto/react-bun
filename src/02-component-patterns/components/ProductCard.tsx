import React, { createContext, CSSProperties, ReactElement } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

export interface Props {
  product: Product
  // children?: ReactElement | ReactElement[]
  children?: (args: ProductCardHandlers) => JSX.Element
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const ProductCard = ({product, children, className, style, onChange, value, initialValues}: Props) => {

  const { counter, increseBy, maxCount, isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues})
  const { Provider } = ProductContext

  return (
    <Provider value={{counter, increseBy, product, maxCount}}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        { children({
          count: counter, 
          isMaxCountReachd: isMaxCountReached,
          maxCount: initialValues.maxCount,
          increaseBy: increseBy,
          reset: reset,
          product: product
        }) }
      </div>
    </Provider>

  )
}
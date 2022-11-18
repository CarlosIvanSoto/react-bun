import React, { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'

export interface Props {
  className?: string
  style?: CSSProperties
}

export const ProductButtons = ({className, style}: Props) => {
    // TODO: maxCuount
    const {increseBy, counter, maxCount} = useContext(ProductContext)

    const isMaxReached = useCallback(
      () => maxCount && counter === maxCount,
      [counter, maxCount],
    )
    // TODO: isMaxReached = useCallback, depencias [ counter, maxCount]
    // TRUE if ( counter === maxCount )
    return (
      <div style={style} className={`${styles.buttonsContainer} ${className}`}>
        <button className={styles.buttonMinus} onClick={() => increseBy(-1)}>-</button>
        <div className={styles.countLabel}>{counter}</div>
        <button disabled={isMaxReached()} className={`${styles.buttonAdd} ${isMaxReached() && styles.disableButtonMax}`} onClick={() => increseBy(1)}>+</button>
      </div>
    )
  }
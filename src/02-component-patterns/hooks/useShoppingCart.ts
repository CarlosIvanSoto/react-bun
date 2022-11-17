import { useState } from "react"
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces"

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({})

  const onProductCountChange = ({count, product}: onChangeArgs) => {

    if (count === 0) 
      setShoppingCart(prev => {
        // delete prev[product.id]
        const {[product.id]: deleted, ...rest} = prev
        return rest
      })
    else 
      setShoppingCart( prev => {
        return {
          ...prev,
          [product.id]: {...product, count}
        }
    })
  }
  return {shoppingCart, onProductCountChange}
}


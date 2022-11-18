import { ReactElement } from "react";
import { Props as ProductButtonsProps} from "../components/ProductButtons";
import { Props as ProductCardProps} from "../components/ProductCard";
import { Props as ProductImagesProps} from "../components/ProductImages";
import { Props as ProductTtieleProps} from "../components/ProductTitle";

export interface Product {
  id: string
  title: string
  img?: string
}
export interface ProductContextProps {
  counter: number
  increseBy: (value: number) => void
  maxCount?: number
  product: Product
}
export interface ProductCardHOCProps {
  (Props: ProductCardProps ): JSX.Element
  Title: (Props: ProductTtieleProps) => JSX.Element
  Image: (Props: ProductImagesProps) => JSX.Element
  Buttons: (Props: ProductButtonsProps) => JSX.Element
}
export interface onChangeArgs {
  product: Product
  count: number
}
export interface ProductInCart extends Product {
  count: number
}

export interface InitialValues {
  count?: number,
  maxCount?: number,
}

export interface ProductCardHandlers {
  count: number
  isMaxCountReachd: boolean
  maxCount?: number
  product: Product
  increaseBy: ( value:number ) => void
  reset: () => void
}
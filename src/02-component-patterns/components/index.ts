import { ProductCardHOCProps } from '../interfaces/interfaces'
import { ProductButtons } from './ProductButtons'
import { ProductCard as ProductCardHOC} from './ProductCard'
import { ProductImage } from './ProductImages'
import { ProductTitle } from './ProductTitle'

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export { ProductImage, ProductTitle, ProductButtons }

export default ProductCard
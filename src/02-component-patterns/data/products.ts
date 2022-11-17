import { Product } from "../interfaces/interfaces"
import coffeMug from '../assets/coffee-mug.png'
import coffeMug2 from '../assets/coffee-mug2.png'

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: coffeMug 
  }
  const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: coffeMug2 
  }
  export const products: Product[] = [ product1, product2]
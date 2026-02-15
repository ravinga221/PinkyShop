import { ProductView } from '../components/ProductView';
import { products } from '../data/products';

export function HomePage() {
  return <ProductView products={products} title="All Products" />;
}

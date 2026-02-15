import { ProductView } from '../components/ProductView';
import { products } from '../data/products';

export function BlousePage() {
  const blouseProducts = products.filter((p) => p.category === 'Blouse');
  return <ProductView products={blouseProducts} title="Blouses Collection" />;
}

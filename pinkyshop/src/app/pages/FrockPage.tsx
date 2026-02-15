import { ProductView } from '../components/ProductView';
import { products } from '../data/products';

export function FrockPage() {
  const frockProducts = products.filter((p) => p.category.includes('Frock'));
  return <ProductView products={frockProducts} title="Frocks Collection" />;
}

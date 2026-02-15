import { ProductView } from '../components/ProductView';
import { products } from '../data/products';

export function SareePage() {
  const sareeProducts = products.filter((p) => p.category === 'Saree');
  return <ProductView products={sareeProducts} title="Sarees Collection" />;
}

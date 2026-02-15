import { ProductView } from '../components/ProductView';
import { products } from '../data/products';

export function SkirtPage() {
  const skirtProducts = products.filter((p) => p.category === 'Skirt');
  return <ProductView products={skirtProducts} title="Skirts Collection" />;
}

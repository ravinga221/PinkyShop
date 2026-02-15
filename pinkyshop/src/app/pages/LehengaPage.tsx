import { ProductView } from '../components/ProductView';
import { products } from '../data/products';

export function LehengaPage() {
  const lehengaProducts = products.filter((p) => p.category === 'Lehenga');
  return <ProductView products={lehengaProducts} title="Lehengas Collection" />;
}

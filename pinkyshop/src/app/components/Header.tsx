import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Header() {
  const { cartItems, openDrawer } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full px-8 py-6 flex items-center justify-between" style={{ fontFamily: 'Playfair Display, serif' }}>
      <div className="text-3xl" style={{ color: '#E83E8C' }}>
        blush & byte
      </div>
      <div className="flex items-center gap-6">
        <button className="relative hover:opacity-70 transition-opacity">
          <Heart className="w-6 h-6" style={{ color: '#E83E8C' }} />
        </button>
        <button 
          onClick={openDrawer}
          className="relative hover:opacity-70 transition-opacity"
        >
          <ShoppingBag className="w-6 h-6" style={{ color: '#E83E8C' }} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center" style={{ background: '#FF69B4', fontFamily: 'Inter, sans-serif' }}>
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
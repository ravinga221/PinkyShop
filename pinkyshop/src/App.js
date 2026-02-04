import React, { useState } from 'react';
import { ShoppingBag, Heart, Star, Share2 } from 'lucide-react';
import { CartProvider, useCart } from './contexts/CartContext';
import ProductGallery from './components/product/ProductGallery';
import { ColorSelector, SizeSelector, QuantitySelector } from './components/product/ProductOptions';
import CartSidebar from './components/cart/CartSidebar';

// Mock Product Data
const PRODUCT = {
  id: 1,
  name: "Cozy Pink Knit Sweater",
  price: 89.99,
  rating: 4.8,
  reviews: 128,
  description: "Stay warm and stylish in our signature chunky knit sweater. Made from premium sustainable cotton blend with a relaxed fit that's perfect for any occasion.",
  colors: [
    { name: 'Rose Pink', hex: '#FDA4AF' },
    { name: 'Hot Pink', hex: '#DB2777' },
    { name: 'Pale Blush', hex: '#FCE7F3' },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  images: [
    'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=1072&q=80',
    'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=1072&q=80',
    'https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  ]
};

const Navbar = () => {
  const { toggleCart, cartCount } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-pink-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-cursive text-2xl pt-1">P</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent hidden sm:block">
              PinkyShop
            </h1>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="p-2 hover:bg-pink-50 rounded-full transition-colors text-gray-500 hover:text-pink-500">
              <Heart size={24} />
            </button>

            <button
              onClick={toggleCart}
              className="relative p-2 hover:bg-pink-50 rounded-full transition-colors text-gray-500 hover:text-pink-500"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

const ProductPage = () => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(PRODUCT.colors[0]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    // Simulate network request
    setTimeout(() => {
      addToCart(
        { ...PRODUCT, image: PRODUCT.images[0] },
        quantity,
        { color: selectedColor, size: selectedSize }
      );
      setIsAdding(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <CartSidebar />

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden shadow-pink-100/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 p-6 md:p-10 lg:p-12">

            {/* Left: Component Gallery */}
            <ProductGallery images={PRODUCT.images} />

            {/* Right: Product Info */}
            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h5 className="text-pink-500 font-bold uppercase tracking-wider text-xs mb-2">New Arrival</h5>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
                    {PRODUCT.name}
                  </h1>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                  <Share2 size={24} />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(PRODUCT.rating) ? "currentColor" : "none"} strokeWidth={i < Math.floor(PRODUCT.rating) ? 0 : 2} />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium underline cursor-pointer">
                  {PRODUCT.reviews} Reviews
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {PRODUCT.description}
              </p>

              {/* Price */}
              <div className="text-3xl font-bold text-gray-900 mb-8 flex items-end gap-2">
                ${PRODUCT.price}
                <span className="text-lg text-gray-400 font-normal line-through decoration-red-400 decoration-2">$129.99</span>
                <span className="text-sm font-bold text-red-500 bg-red-50 px-2 py-1 rounded ml-2">-30%</span>
              </div>

              {/* Options */}
              <div className="space-y-6 flex-1">
                <ColorSelector
                  colors={PRODUCT.colors}
                  selectedColor={selectedColor}
                  onSelect={setSelectedColor}
                />

                <SizeSelector
                  sizes={PRODUCT.sizes}
                  selectedSize={selectedSize}
                  onSelect={setSelectedSize}
                />

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <QuantitySelector
                      quantity={quantity}
                      onIncrease={() => setQuantity(q => q + 1)}
                      onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                    />

                    <button
                      onClick={handleAddToCart}
                      disabled={isAdding}
                      className="flex-1 bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold text-lg py-3 px-8 rounded-xl shadow-lg shadow-pink-200 hover:shadow-pink-300 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                      {isAdding ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Adding...
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={20} />
                          Add to Cart
                        </>
                      )}
                    </button>

                    <button className="p-3 border border-gray-200 rounded-xl hover:border-pink-200 hover:bg-pink-50 text-gray-400 hover:text-pink-500 transition-colors">
                      <Heart size={24} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-xs font-medium text-gray-600">Free Returns</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </div>
                  <span className="text-xs font-medium text-gray-600">Fast Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <span className="text-xs font-medium text-gray-600">Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-pink-100 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">© 2024 PinkyShop. Made with ❤️ for pink lovers.</p>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <ProductPage />
    </CartProvider>
  );
}
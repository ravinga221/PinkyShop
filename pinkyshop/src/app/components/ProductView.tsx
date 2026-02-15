import { useState } from 'react';
import { Product } from '../data/products';
import { Rating } from './Rating';
import { ColorSelector } from './ColorSelector';
import { SizeSelector } from './SizeSelector';
import { QuantitySelector } from './QuantitySelector';
import { AddToCartButton } from './AddToCartButton';
import { ProductDetails } from './ProductDetails';
import { useCart } from '../context/CartContext';

interface ProductViewProps {
  products: Product[];
  title: string;
}

export function ProductView({ products, title }: ProductViewProps) {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes[2]); // Default to L
  const [quantity, setQuantity] = useState(1);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0].name);
    setSelectedSize(product.sizes[2] || product.sizes[0]);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, selectedColor, selectedSize, quantity);
  };

  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      <h2
        className="text-3xl mb-8"
        style={{
          fontFamily: 'Playfair Display, serif',
          color: '#2D2D2D',
        }}
      >
        {title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* LEFT COLUMN - Image Gallery (60% width = 3 columns) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="relative rounded-2xl overflow-hidden" style={{ background: '#FFFAFC' }}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full aspect-square object-cover transition-transform hover:scale-102"
            />
            <span
              className="absolute top-4 right-4 px-4 py-2 rounded-full text-white text-sm"
              style={{ background: '#E83E8C', fontFamily: 'Inter, sans-serif' }}
            >
              LIMITED
            </span>
          </div>

          {/* Product Grid */}
          <div>
            <h3
              className="mb-4 text-lg"
              style={{
                fontFamily: 'Playfair Display, serif',
                color: '#2D2D2D',
              }}
            >
              Browse Collection
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductSelect(product)}
                  className="relative rounded-lg overflow-hidden transition-all hover:opacity-80 group"
                  style={{
                    border: selectedProduct.id === product.id ? '3px solid #E83E8C' : '3px solid transparent',
                    boxShadow: selectedProduct.id === product.id ? '0 4px 12px rgba(232, 62, 140, 0.3)' : 'none',
                  }}
                >
                  <div className="aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 p-2 text-xs text-white text-center"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {product.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Product Details (40% width = 2 columns) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Category Tag */}
          <span
            className="inline-block px-3 py-1 rounded-full text-sm"
            style={{
              background: '#FFD9E6',
              color: '#E83E8C',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {selectedProduct.category}
          </span>

          {/* Product Title */}
          <h1
            className="text-4xl"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2D2D2D',
            }}
          >
            {selectedProduct.name}
          </h1>

          {/* Rating */}
          <Rating rating={selectedProduct.rating} reviews={selectedProduct.reviews} />

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span
              className="text-3xl"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#E83E8C',
              }}
            >
              ${selectedProduct.price.toFixed(2)}
            </span>
            <span
              className="text-xl line-through"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#A65A7A',
                opacity: 0.6,
              }}
            >
              ${selectedProduct.originalPrice.toFixed(2)}
            </span>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed" style={{ color: '#A65A7A' }}>
            {selectedProduct.description}
          </p>

          {/* Color Selector */}
          <ColorSelector
            colors={selectedProduct.colors}
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
          />

          {/* Size Selector */}
          <SizeSelector
            sizes={selectedProduct.sizes}
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4">
            <div className="w-32">
              <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
            </div>
            <div className="flex-1">
              <AddToCartButton quantity={quantity} onAddToCart={handleAddToCart} />
            </div>
          </div>

          {/* Product Details Accordion */}
          <div className="pt-6">
            <ProductDetails />
          </div>
        </div>
      </div>
    </main>
  );
}